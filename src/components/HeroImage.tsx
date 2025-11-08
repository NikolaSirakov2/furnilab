interface HeroImageProps {
  src?: string;
  alt?: string;
}

const HeroImage = ({ src, alt }: HeroImageProps) => {
  if (!src) {
    return (
      <div className="lg:absolute right-0 lg:w-1/2 mt-10 lg:mt-0">
        <div className="aspect-video lg:h-[250px] w-full bg-zinc-200 flex items-center justify-center text-zinc-500 rounded-3xl">
          <span className="text-lg">Hero Image PlaceHolder</span>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:absolute right-0 lg:w-[60%] xl:w-[55%] mt-10 lg:mt-0">
      <div className="group relative aspect-[5/3] lg:h-[340px] xl:h-[340px] w-full overflow-hidden rounded-3xl">
        <img
          src={src}
          alt={alt ?? "Furnilab collection"}
          className="h-full w-full object-cover saturate-125 transition-transform duration-500 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 border border-zinc-100/40 mix-blend-overlay" />
      </div>
    </div>
  );
};

export default HeroImage;

