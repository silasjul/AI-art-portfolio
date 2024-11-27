"use client";

import { playfair } from "@/app/meta";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactBtn() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(btnRef.current, {
      top: 20,
      right: 20,
      width: 150,
      height: 50,
      fontSize: "1.2rem",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=200",
        scrub: true,
      },
    });
  });

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none flex justify-center z-[400]"
    >
      <button
        ref={btnRef}
        className={
          playfair.className +
          " text-black bg-gradient-to-r from-[#6FFF95] to-[#7AFFF4] absolute bottom-20 w-56 h-16 rounded-full z-10 text-2xl pointer-events-auto btn"
        }
      >
        Get in touch
      </button>
    </div>
  );
}
