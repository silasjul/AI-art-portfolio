"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function ImageGallery() {
  const images = require.context("/public/images", true);
  const imageList = images.keys().map((image) => images(image));
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
      },
    });
  });

  return (
    <div
      ref={container}
      className="absolute top-full flex flex-wrap justify-center gap-4 mx-[200px]"
    >
      {imageList.map((image, id) => (
        <Image
          className="w-[300px] basis-1/4" 
          key={id}
          src={image.default}
          alt="img"
          width={image.width}
          height={image.height}
        />
      ))}
    </div>
  );
}
