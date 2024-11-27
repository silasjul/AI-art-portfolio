"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { loRes } from "@/app/meta";
gsap.registerPlugin(ScrollTrigger);

export default function ImageGallery() {
  const images = require.context("/public/images", true);
  const imageList = images.keys().map((image) => images(image));
  const imagesRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isLeftSide = (element: HTMLElement) => {
    const elementCenter =
      element.getBoundingClientRect().left + element.offsetWidth / 2; // Calculate the center of the element
    const viewportCenter = window.innerWidth / 2; // Calculate the center of the viewport
    return elementCenter < viewportCenter; // Return true if the element's center is to the left of the viewport's center
  };

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.onload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  useGSAP(() => {
    imagesRef.current &&
      Array.from(imagesRef.current.children).forEach((imageWrap: any) => {
        const imgEl = imageWrap.children[0]; // Select the image element inside the grid item
        let leftSide = isLeftSide(imageWrap); // Check if the element is on the left side of the viewport

        // Create a GSAP timeline with ScrollTrigger for each grid item
        gsap
          .timeline({
            scrollTrigger: {
              trigger: imageWrap, // Trigger the animation when this element enters the viewport
              start: "top bottom+=10%", // Start when the top of the element is 10% past the bottom of the viewport
              end: "bottom top-=25%", // End when the bottom of the element is 25% past the top of the viewport
              scrub: true, // Smooth scrub animation
            },
          })
          .from(imageWrap, {
            // Initial state when the element enters the viewport
            startAt: { filter: "blur(0px) brightness(100%) contrast(100%)" }, // Ensure no blur or brightness adjustments at the start
            z: 300, // Translate the item 300px closer on the Z-axis
            rotateX: 70, // Start with a rotation of 70 degrees on the X-axis
            rotateZ: leftSide ? 5 : -5, // Rotate 5 degrees if on the left, -5 degrees if on the right
            xPercent: leftSide ? -20 : 20, // Horizontal translation: -40% if on the left, 40% if on the right
            skewX: leftSide ? -20 : 20, // Skew the element on the X-axis
            yPercent: 100, // Start with the element below the viewport
            filter: "blur(7px) brightness(0%) contrast(400%)", // Start with a blur, low brightness, and high contrast
            ease: "sine",
          })
          .to(imageWrap, {
            // Animation when the element exits the viewport
            z: 300, // Move back to original Z-translation (300px)
            rotateX: -50, // Rotate -50 degrees on the X-axis
            rotateZ: leftSide ? -1 : 1, // Slightly rotate on the Z-axis (-1 or 1 depending on side)
            xPercent: leftSide ? -20 : 20, // Move slightly left (-20%) or right (20%) on exit
            skewX: leftSide ? 10 : -10, // Skew slightly on exit
            filter: "blur(4px) brightness(0%) contrast(500%)", // Add blur and reduce brightness on exit
            ease: "sine.in",
          })
          .from(
            imgEl,
            {
              // Additional animation on the image itself (scale along the Y-axis)
              scaleY: 1.8, // Scale Y-axis by 1.8
              ease: "sine",
            },
            0
          )
          .to(
            imgEl,
            {
              scaleY: 1.8, // Return to normal scaling
              ease: "sine.in",
            },
            ">"
          );
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: imagesRef.current, // Trigger the animation based on the grid's position
          start: "top bottom", // Start the animation when the top of the grid is at the bottom of the viewport
          end: "bottom top", // End the animation when the bottom of the grid is at the top of the viewport
          scrub: true, // Smooth scrub
        },
      })
      .fromTo(
        marqueeRef.current,
        {
          x: "100vw", // Start the marquee off-screen to the right
        },
        {
          x: "-100%", // Move the marquee to the left (completely across the screen)
          ease: "sine",
        }
      );
  });

  return (
    <>
      <div ref={containerRef} className="gallery" />
      <p
        ref={marqueeRef}
        className={
          loRes.className +
          " fixed whitespace-nowrap top-1/2 left-[300vw] text-5xl -translate-x-1/2 -translate-y-1/2 text-white z-50 marquee"
        }
      >
        Welcome to a world where the boundaries between reality and imagination
        blur. Immerse yourself in bold, futuristic digital art that tells
        stories of distant galaxies, advanced civilizations, and the evolving
        relationship between humanity and technology. Each piece invites you to
        explore a new dimension of creativity, pushing the limits of what's
        possible.
      </p>
      <div
        ref={imagesRef}
        className="relative w-full h-full top-[10vh] flex flex-wrap justify-center gap-5 overflow-hidden"
      >
        {imageList.map((image, id) => (
          <div
            key={id}
            className={`basis-[40%] flex ${
              id % 2 == 0 ? "justify-end" : "justify-start"
            }`}
          >
            <Image
              className="w-[300px]"
              src={image.default}
              alt="img"
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
    </>
  );
}
