import type { CSSProperties, ReactElement } from "react";
import { useLanguage } from "../i18n/LanguageContext";

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

function resolveBackgroundSource(src?: string): string | undefined {
  if (!src) {
    return undefined;
  }

  if (src.startsWith("http")) {
    return src;
  }

  if (src.startsWith("/")) {
    return src;
  }

  return `/${src}`;
}

function getImageWrapperStyle(src?: string): CSSProperties | undefined {
  const backgroundSource = resolveBackgroundSource(src);

  if (!backgroundSource) {
    return undefined;
  }

  return {
    backgroundImage: `url(${backgroundSource})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
}

export function InspiredCard({ name, src }: InspiredCardProps): ReactElement {
  const { dictionary } = useLanguage();

  return (
    <div className="">
      <div
        aria-label={src ? name : dictionary.inspiredCard.placeholder}
        className={getImageWrapperClassName(src)}
        role="img"
        style={getImageWrapperStyle(src)}
      >
        {!src && dictionary.inspiredCard.placeholder}
      </div>
      <p className="text-xl lg:text-2xl text-center font-semibold mt-4 mb-2 p-2">
        {name}
      </p>
    </div>
  );
}
