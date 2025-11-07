import type { ReactElement } from "react";

interface InspiredCardProps {
  name: string;
  src?: string;
}

function getImageWrapperClassName(src?: string): string {
  const baseClassName =
    "w-full h-[450px] saturate-130 lg:h-[600px] flex items-center justify-center text-zinc-600 hover:scale-105 transition-all duration-600 ease-in-out cursor-pointer";

  if (src) {
    return baseClassName;
  }

  return `${baseClassName} bg-zinc-300`;
}

export function InspiredCard({ name, src }: InspiredCardProps): ReactElement {
  return (
    <div className="">
      <div className={getImageWrapperClassName(src)}>
        {!src && "Image Placeholder"}
      </div>
      <p className="text-xl lg:text-2xl text-center font-semibold mt-2 mb-2 p-2">
        {name}
      </p>
    </div>
  );
}
