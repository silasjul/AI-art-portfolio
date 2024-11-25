import React, { useRef } from "react";

export default function test() {
  const divs = [1, 2, 3];
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <>
      {divs.map((v, i) => {
        <div ref={(el) => {refs.current[i] = el}}>test</div>;
      })}
    </>
  );
}
