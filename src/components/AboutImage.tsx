import { useLanguage } from "../i18n/LanguageContext";

interface AboutImageProps {
  src?: string;
  alt?: string;
  className?: string;
  containerWidthClassName?: string;
  contentHeightClassName?: string;
}

function AboutImage({
  src,
  alt,
  className,
  containerWidthClassName,
  contentHeightClassName,
}: AboutImageProps) {
  const { dictionary, language } = useLanguage();
  const containerClasses = ["mt-10 lg:mt-0 lg:relative"];
  const contentClasses = ["hero-aspect w-full rounded-3xl"];
  const isBulgarian = language === "bg";

  containerClasses.push(
    containerWidthClassName ??
      (isBulgarian
        ? "lg:w-[52%] xl:w-[45%] 2xl:w-[38%]"
        : "lg:w-[66%] xl:w-[60.5%]")
  );
  contentClasses.push(
    contentHeightClassName ??
      (isBulgarian
        ? "lg:h-[420px] xl:h-[480px] 2xl:h-[438px]"
        : "lg:h-[374px] xl:h-[374px] 2xl:h-[416px]")
  );

  if (className) {
    containerClasses.push(className);
  }

  if (!src) {
    return (
      <div className={containerClasses.join(" ")}>
        <div
          className={[
            ...contentClasses,
            "bg-zinc-200 flex items-center justify-center text-zinc-500",
          ].join(" ")}
        >
          <span className="text-lg">{dictionary.aboutImage.placeholder}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses.join(" ")}>
      <div
        className={["group relative overflow-hidden", ...contentClasses].join(
          " "
        )}
      >
        <img
          src={src}
          alt={alt ?? dictionary.aboutImage.fallbackAlt}
          className="h-full w-full object-cover saturate-125 transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 border border-zinc-100/40 mix-blend-overlay" />
      </div>
    </div>
  );
}

export default AboutImage;
