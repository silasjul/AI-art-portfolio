"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLenis } from "lenis/react";

export default function Preloader() {
  const [scroll, setScroll] = useState(false);

  const lenis = useLenis();
  if (scroll) lenis?.start();
  else lenis?.stop();

  const left = useRef<HTMLDivElement>(null);
  const right = useRef<HTMLDivElement>(null);
  const textContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const duration = 0.8; // seconds
    if (textContainer.current)
      gsap
        .timeline({
          delay: 0.5,
          onComplete: () => {
            setScroll(true);
            console.log("ended");
          },
        })
        .to(textContainer.current.children, {
          opacity: 1,
          y: -20,
          stagger: 0.03,
        })
        .to(textContainer.current.children, {
          delay: 0.8,
          opacity: 0,
          y: -40,
          stagger: 0.03,
        })
        .to(
          left.current,
          {
            height: "50%",
            duration: duration,
            ease: "power1.inOut",
          },
          "zoomOut"
        )
        .to(
          right.current,
          {
            height: "50%",
            duration: duration,
            ease: "power1.inOut",
          },
          "zoomOut"
        )
        .to(
          left.current,
          {
            x: "-105%",
            duration: duration,
            ease: "power3.inOut",
          },
          "out"
        )
        .to(
          right.current,
          {
            x: "105%",
            duration: duration,
            ease: "power3.inOut",
          },
          "out"
        );
  });

  const loadingText = "Bringing inspiration to life... one project at a time";

  return (
    <div className="absolute h-screen w-full top-0 left-0 z-[5000] pointer-events-none">
      <div
        onLoad={() => lenis?.stop()}
        className="pageLoader absolute h-screen w-full top-0 left-0 z-30 pointer-events-none overflow-hidden"
      >
        <div
          ref={left}
          className="absolute h-screen w-1/2 bg-white bottom-0 left-0"
        ></div>
        <div
          ref={right}
          className="absolute h-screen w-1/2 bg-white top-0 right-0"
        ></div>
      </div>
      <p
        ref={textContainer}
        className="z-50 text-lg absolute top-0 left-0 w-full h-screen flex items-center pointer-events-none justify-center"
      >
        {loadingText.split("").map((char, idx) => (
          <span className="whitespace-pre opacity-0" key={idx}>
            {char}
          </span>
        ))}
      </p>
    </div>
  );
}
