"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: string;
  duration?: number;
  className?: string;
};

type ParsedValue = {
  number: number;
  prefix: string;
  suffix: string;
  decimalPlaces: number;
};

function parseValue(value: string): ParsedValue {
  const match = value.match(/^([^0-9-]*)(-?[\d,.]+)(.*)$/);

  if (!match) {
    return {
      number: 0,
      prefix: "",
      suffix: value,
      decimalPlaces: 0,
    };
  }

  const numericText = match[2].replace(/,/g, "");
  const decimalSection = numericText.split(".")[1];

  return {
    number: Number(numericText),
    prefix: match[1],
    suffix: match[3],
    decimalPlaces: decimalSection?.length ?? 0,
  };
}

export default function AnimatedCounter({
  value,
  duration = 1400,
  className = "",
}: AnimatedCounterProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const element = containerRef.current;

    if (!element) {
      return;
    }

    const parsed = parseValue(value);

    if (!Number.isFinite(parsed.number)) {
      setDisplayValue(value);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    let animationFrameId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimatedRef.current) {
          return;
        }

        hasAnimatedRef.current = true;
        const startTime = performance.now();

        function animate(currentTime: number) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentNumber = parsed.number * easedProgress;

          const formattedNumber = currentNumber.toLocaleString("en-US", {
            minimumFractionDigits: parsed.decimalPlaces,
            maximumFractionDigits: parsed.decimalPlaces,
          });

          setDisplayValue(
            `${parsed.prefix}${formattedNumber}${parsed.suffix}`,
          );

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
          } else {
            setDisplayValue(value);
          }
        }

        animationFrameId = requestAnimationFrame(animate);
        observer.unobserve(entry.target);
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [duration, value]);

  return (
    <span ref={containerRef} className={className}>
      {displayValue}
    </span>
  );
}