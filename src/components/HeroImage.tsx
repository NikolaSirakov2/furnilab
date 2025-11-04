interface HeroImageProps {
  src?: string;
}

const HeroImage = ({ src }: HeroImageProps) => {
  return (
    <div className="lg:absolute overflow-clip right-0 lg:w-1/2 mt-10 lg:mt-0">
      <div
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
        className="aspect-video saturate-120 lg:h-[250px] w-full bg-zinc-200 flex items-center justify-center text-zinc-500"
      >
        {/* Image Placeholder */}
        {src ? "" : <span className="text-lg">Hero Image PlaceHolder</span>}
      </div>
    </div>
  );
};

export default HeroImage;

