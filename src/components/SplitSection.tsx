import { ReactNode } from "react";

interface SplitSectionProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  children: ReactNode;
}

export default function SplitSection({
  imageSrc,
  imageAlt,
  imagePosition = "left",
  children,
}: SplitSectionProps) {
  const image = (
    <div className="relative min-h-[60vw] md:min-h-full">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
  );

  const text = (
    <div className="bg-parchment flex flex-col justify-center px-10 md:px-16 py-12 md:py-16 overflow-y-auto">
      {children}
    </div>
  );

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      style={{
        minHeight: "calc(100vh - clamp(64px, 6vw, 96px))",
        maxHeight: "calc(100vh - clamp(64px, 6vw, 96px))",
      }}
    >
      {imagePosition === "left" ? <>{image}{text}</> : <>{text}{image}</>}
    </section>
  );
}
