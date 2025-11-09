import { useLanguage } from "../i18n/LanguageContext";

interface HeroImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

const HeroImage = ({ src, alt, className }: HeroImageProps) => {
  const { dictionary } = useLanguage();
  const containerClasses = [
    "lg:absolute right-0 lg:w-[60%] xl:w-[55%] mt-10 lg:mt-0",
  ];

  if (className) {
    containerClasses.push(className);
  }

  if (!src) {
    return (
      <div className={containerClasses.join(" ")}>
        <div className="hero-aspect lg:h-[340px] xl:h-[340px] w-full bg-zinc-200 flex items-center justify-center text-zinc-500 rounded-3xl">
          <span className="text-lg">{dictionary.heroImage.placeholder}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses.join(" ")}>
      <div className="group relative hero-aspect lg:h-[340px] xl:h-[340px] w-full overflow-hidden rounded-3xl">
        <img
          src={src}
          alt={alt ?? dictionary.heroImage.fallbackAlt}
          className="h-full w-full object-cover saturate-125 transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 border border-zinc-100/40 mix-blend-overlay" />
      </div>
    </div>
  );
};

export default HeroImage;
