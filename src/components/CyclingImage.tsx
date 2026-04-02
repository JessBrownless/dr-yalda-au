"use client";

import { useState, useEffect } from "react";

interface CyclingImageProps {
  images: { src: string; position?: string }[];
  alt?: string;
  interval?: number;
}

export default function CyclingImage({ images, alt = "", interval = 5000 }: CyclingImageProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ aspectRatio: "3/4", transform: "scale(1.05)", transformOrigin: "center center" }}>
      {images.map(({ src, position = "50% top" }, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          aria-hidden={i !== 0}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[2500ms] ease-in-out"
          style={{ objectPosition: position, opacity: i === current ? 1 : 0 }}
        />
      ))}
    </div>
  );
}
