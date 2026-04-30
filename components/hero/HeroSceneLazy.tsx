"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export function HeroSceneLazy() {
  return (
    <Suspense fallback={<div className="w-full h-full" />}>
      <HeroScene />
    </Suspense>
  );
}
