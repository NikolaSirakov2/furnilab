import { ArrowRight } from "lucide-react";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="max-w-[1600px] mt-30 mx-auto p-4 sm:p-8 mb-20">
      <div className="flex relative flex-col lg:flex-row lg:space-x-12 overflow-x-clip">
        {/* Left Content */}
        <div className="lg:w-1/2">
          {/* Main Title: Large Bold */}
          <h1 className="text-7xl sm:text-8xl font-extrabold leading-none mb-6">
            <span className="block impact lg:text-[240px]">FINE</span>
            <span className="block impact lg:text-[230px] tracking-tight lg:mt-10">
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
          <button className="group flex items-center space-x- bg-zinc-900 text-white text-sm font-semibold py-4 rounded-full transition-all duration-150 hover:bg-transparent border border-zinc-900 hover:text-zinc-900 ease-in lg:absolute lg:text-lg lg:py-5 lg:px-10 bottom-10 right-10 hover:animate-wiggle">
            <span>Shop Now</span>
            <ArrowRight size={20} className="" />
          </button>
        </div>
        {/* Right Content */}
        <div className="">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
