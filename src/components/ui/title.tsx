import { playfair } from "@/app/meta";
import React from "react";

export default function Title() {
  return (
    <div className="text-white text-center mt-20">
      <h1 className={playfair.className + " text-[5rem] leading-[110%]"}>
        Ascend Your
        <br />
        Digital Art
      </h1>
      <p className="font-light text-white/50 mt-8 text-md">
        Exploring Imagination Through Digital Art and Design
      </p>
    </div>
  );
}
