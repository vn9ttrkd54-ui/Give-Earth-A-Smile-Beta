"use client";

import dynamic from "next/dynamic";
import MapLoading from "@/components/impact/MapLoading";

const ImpactMapClient = dynamic(
  () => import("@/components/impact/ImpactMapClient"),
  {
    ssr: false,
    loading: () => <MapLoading />,
  },
);

export default function ImpactMap() {
  return <ImpactMapClient />;
}