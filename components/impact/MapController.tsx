"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

type MapControllerProps = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export default function MapController({
  latitude,
  longitude,
  zoom,
}: MapControllerProps) {
  const map = useMap();

  useEffect(() => {
    map.flyTo([latitude, longitude], zoom, {
      animate: true,
      duration: 1.2,
    });
  }, [latitude, longitude, map, zoom]);

  return null;
}