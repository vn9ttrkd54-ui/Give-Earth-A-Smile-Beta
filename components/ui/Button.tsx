import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "light"
  | "danger";

type ButtonSize = "small" | "medium" | "large";

type SharedButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  fullWidth?: boolean;
};

type LinkButtonProps = SharedButtonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className"
  > & {
    href: string;
  };

type NativeButtonProps = SharedButtonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "className"
  > & {
    href?: never;
  };

type ButtonProps =
  | LinkButtonProps
  | NativeButtonProps;

const baseStyles =
  "inline-flex items-center justify-center border font-bold no-underline transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B7CA7F]/70 disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles: Record<
  ButtonVariant,
  string
> = {
  primary:
    "border-[#233F31] bg-[#233F31] text-white hover:border-[#6F8172] hover:bg-[#6F8172] hover:text-white",

  secondary:
    "border-[#233F31] bg-transparent text-[#233F31] hover:bg-[#233F31] hover:text-white",

  light:
    "border-white bg-white text-[#233F31] hover:border-[#F1F6C8] hover:bg-[#F1F6C8] hover:text-[#233F31]",

  danger:
    "border-red-800 bg-red-800 text-white hover:border-red-950 hover:bg-red-950 hover:text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  small: "px-4 py-2 text-sm",
  medium: "px-6 py-3",
  large: "px-8 py-4 text-lg",
};

function combineClasses(
  values: Array<string | false | undefined>,
) {
  return values.filter(Boolean).join(" ");
}

export default function Button(
  props: ButtonProps,
) {
  const {
    children,
    variant = "primary",
    size = "medium",
    className,
    fullWidth = false,
  } = props;

  const buttonClasses = combineClasses([
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className,
  ]);

  if ("href" in props && props.href) {
    const {
      href,
      variant: _variant,
      size: _size,
      fullWidth: _fullWidth,
      className: _className,
      children: _children,
      ...linkProps
    } = props;

    return (
      <Link
        href={href}
        className={buttonClasses}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const {
    variant: _variant,
    size: _size,
    fullWidth: _fullWidth,
    className: _className,
    children: _children,
    type = "button",
    ...buttonProps
  } = props;

  return (
    <button
      type={type}
      className={buttonClasses}
      {...buttonProps}
    >
      {children}
    </button>
  );
}