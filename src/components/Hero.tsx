import { ArrowRight } from "lucide-react";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="max-w-[1350px] 2xl:max-w-[1600px] mt-30 mx-auto p-4 sm:p-8 mb-20">
      <div className="flex relative flex-col lg:flex-row lg:space-x-12 overflow-x-clip">
        {/* Left Content */}
        <div className="lg:w-1/2">
          {/* Main Title: Large Bold */}
          <h1 className="text-[clamp(3.75rem,14vw,12rem)] font-extrabold leading-none mb-6">
            <span className="hero-sequence hero-sequence-1 block impact lg:text-[320px]">
              FINE
            </span>
            <span className="hero-sequence hero-sequence-2 block impact text-[255px] 2xl:text-[305px] tracking-tight lg:mt-10">
              FURNISHINGS
            </span>
          </h1>
          {/* SubText */}
          <div className="text-base lg:text-lg max-w-md lg:w-full mb-8 py-2 pl-2 text-zinc-600">
            Choosing the right furniture for your home online will add elegance
            and functionality to your space. We offer a curated collection of
            fine furnishing.
          </div>
          {/* CTA Button */}
          <button className="group flex items-center space-x- bg-zinc-900 text-white text-sm font-semibold py-4 px-4 rounded-full transition-all duration-150 hover:bg-transparent border border-zinc-900 hover:text-zinc-900 ease-in lg:absolute lg:text-lg lg:py-5 lg:px-10 bottom-10 right-10 hover:animate-wiggle">
            <span>Shop Now</span>
            <ArrowRight size={20} className="" />
          </button>
        </div>
        {/* Right Content */}
        <HeroImage
          className="hero-sequence hero-sequence-3"
          src="/hero-image.png"
          alt="Neutral-toned living room with modern furniture"
        />
      </div>
    </section>
  );
};

export default Hero;
