"use client";

import { useEffect, useState } from "react";

const slides = [
  { src: "/assets/IMG_4905.JPG", alt: "Dr. Yalda Jamali" },
  { src: "/assets/IMG_4902.JPG", alt: "Dr. Yalda Jamali" },
];

export default function WorkTogetherSlideshow() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative overflow-hidden aspect-square md:[aspect-ratio:3/4]">
      {slides.map((s, idx) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className="absolute inset-0 w-full h-full object-cover object-top transition-opacity ease-in-out"
          style={{ opacity: i === idx ? 1 : 0, transitionDuration: "2500ms" }}
        />
      ))}
    </div>
  );
}
