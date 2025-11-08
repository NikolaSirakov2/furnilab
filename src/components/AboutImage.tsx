interface AboutImageProps {
  src?: string;
  alt?: string;
  className?: string;
  containerWidthClassName?: string;
  contentHeightClassName?: string;
}

const AboutImage = ({
  src,
  alt,
  className,
  containerWidthClassName,
  contentHeightClassName,
}: AboutImageProps) => {
  const containerClasses = ["mt-10 lg:mt-0 lg:relative"];
  const contentClasses = ["hero-aspect w-full rounded-3xl"];

  containerClasses.push(
    containerWidthClassName ?? "lg:w-[66%] xl:w-[60.5%]",
  );
  contentClasses.push(
    contentHeightClassName ?? "lg:h-[374px] xl:h-[374px]",
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
          <span className="text-lg">About Image Placeholder</span>
        </div>
      </div>
    );
  }

  return (
    <div className={containerClasses.join(" ")}>
      <div
        className={["group relative overflow-hidden", ...contentClasses].join(
          " ",
        )}
      >
        <img
          src={src}
          alt={alt ?? "Furnilab studio showcase"}
          className="h-full w-full object-cover saturate-125 transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 border border-zinc-100/40 mix-blend-overlay" />
      </div>
    </div>
  );
};

export default AboutImage;

