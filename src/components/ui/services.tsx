"use client";

import { loRes } from "@/app/meta";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function Services() {
  const services: { header: string; description: string }[] = [
    {
      header: "Custom art",
      description:
        "Creating personalized digital artwork tailored to the client’s specific needs, such as portraits, character designs, or themed illustrations.",
    },
    {
      header: "Graphic Design Services",
      description:
        "Designing logos, banners, social media content, and other branding materials for businesses, influencers, or personal projects.",
    },
    {
      header: "Illustration for Publications",
      description:
        "Providing illustrations for books, magazines, comics, or other print and digital publications, including cover art and editorial content.",
    },
    {
      header: "Concept Art and Visual Development",
      description:
        "Developing concept art for industries like gaming, animation, or film, including character design, environments, and props.",
    },
  ];

  const header = useRef(null);

  useGSAP(() => {
    gsap.from(header.current, {
      y: 1000,
      opacity: 0,
      scrollTrigger: {
        trigger: header.current,
        start: "bottom bottom",
        end: "+=400",
        scrub: true,
        markers: true,
      },
    });
  });

  return (
    <div ref={header} className="mt-[50vh] mx-48">
      <h1
        className={
          loRes.className +
          " relative w-full h-full text-8xl text-white overflow-hidden z-[1000] mb-8"
        }
      >
        <span>Services</span>
      </h1>
      <div className="grid grid-cols-2 gap-8">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="text-white border border-white z-[1000] h-[50vh] rounded-xl"
          >
            <h1>
              {idx + 1}. {s.header}
            </h1>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
