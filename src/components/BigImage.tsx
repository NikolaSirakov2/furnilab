import type { CSSProperties } from "react";

interface BigImageProps {
  src?: string;
}

export function BigImage({ src }: BigImageProps) {
  const backgroundStyles: CSSProperties | undefined = src
    ? {
        backgroundImage: `url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }
    : undefined;

  return (
    <div
      style={backgroundStyles}
      className="w-full h-[450px] lg:h-[580px] overflow-clip saturate-120 bg-zinc-300 center-item text-zinc-600 transform transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-1"
      role={src ? "img" : "presentation"}
      aria-label={src ? "New arrival highlight" : undefined}
    >
      {!src && <span className="text-lg">Main New Arrival Image</span>}
    </div>
  );
}

