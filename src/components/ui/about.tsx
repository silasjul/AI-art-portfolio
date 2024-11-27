"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(ref.current, {
      y: -1000,
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "-=100",
        scrub: true,
      },
    });
    if (text.current)
      gsap.from(text.current.children, {
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: text.current,
          start: "top bottom",
          end: "+=200",
          scrub: true,
        },
      });
  });

  return (
    <div ref={ref} className="absolute w-full h-screen bg-white flex z-[300]">
      <div ref={text} className="m-20">
        <h1 className="text-5xl font-medium mb-8">Hi, I'm Silas</h1>
        <div className="flex flex-col gap-5 text-xl leading-10 font-normal opacity-80">
          <p>
            I’m thrilled to share my artistic journey with you. For as long as I
            can remember, creating art has been my way of expressing emotions,
            telling stories, and capturing the beauty of the world around us. My
            work is a reflection of my passion for color, texture, and the
            subtle details that make every piece unique.
          </p>
          <p>
            Each artwork you’ll find here is crafted with care and intention. My
            goal is to create pieces that don’t just fill a space but transform
            it—evoking emotion, sparking conversation, and resonating on a
            personal level. Whether it’s a bold, abstract statement or a
            delicate, contemplative piece, I pour my heart into every
            brushstroke.
          </p>
          <p>
            I invite you to explore my collection and find the piece that speaks
            to you. Whether you’re decorating your home, adding to your art
            collection, or searching for the perfect gift, I hope my work brings
            inspiration and joy to your life.
          </p>
          <p>
            Thank you for visiting—I can’t wait to see where my art finds its
            new home!
          </p>
        </div>
      </div>
      <Image
        className="m-20 rounded-3xl"
        src="/artist.png"
        alt="me"
        width={1024}
        height={1024}
      />
    </div>
  );
}
