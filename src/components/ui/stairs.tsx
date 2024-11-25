import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline/next";

export default function Stairs() {
  return (
    <>
      <Spline
        scene="https://prod.spline.design/qZbPQWqug40j66ob/scene.splinecode"
        autoFocus
      />
      <div className="absolute right-0 bottom-5 w-40 h-12 bg-black mt-auto ml-auto z-[10]"></div>
    </>
  );
}
