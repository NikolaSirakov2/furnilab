import { ArrowRight } from "lucide-react";
import HeroImage from "./HeroImage";
import { useLanguage } from "../i18n/LanguageContext";

const Hero = () => {
  const { dictionary, language } = useLanguage();
  const heroImageClassName =
    language === "bg"
      ? "hero-sequence hero-sequence-3 lg:!w-[48%] xl:!w-[46%] 2xl:!w-[44%]"
      : "hero-sequence hero-sequence-3";

  return (
    <section className="max-w-[1350px] 2xl:max-w-[1600px] mt-30 mx-auto p-4 sm:p-8 mb-20">
      <div className="flex relative flex-col lg:flex-row lg:space-x-12 overflow-x-clip">
        {/* Left Content */}
        <div className="lg:w-1/2">
          {/* Main Title: Large Bold */}
          <h1 className="text-[clamp(3.75rem,14vw,12rem)] font-extrabold leading-none mb-6">
            <span className="hero-sequence hero-sequence-1 block impact lg:text-[320px] whitespace-nowrap">
              {dictionary.hero.line1}
            </span>
            <span className="hero-sequence hero-sequence-2 block impact lg:text-[255px] 2xl:text-[305px] tracking-tight lg:mt-10 whitespace-nowrap">
              {dictionary.hero.line2}
            </span>
          </h1>
          {/* SubText */}
          <div className="text-base lg:text-lg max-w-md lg:w-full mb-8 py-2 pl-2 text-zinc-600">
            {dictionary.hero.description}
          </div>
          {/* CTA Button */}
          <button className="group flex items-center space-x- bg-zinc-900 text-white text-sm font-semibold py-4 px-4 rounded-full transition-all duration-150 hover:bg-transparent border border-zinc-900 hover:text-zinc-900 ease-in lg:absolute lg:text-lg lg:py-5 lg:px-10 bottom-10 right-10 hover:animate-wiggle">
            <span>{dictionary.hero.cta}</span>
            <ArrowRight size={20} className="" />
          </button>
        </div>
        {/* Right Content */}
        <HeroImage
          className={heroImageClassName}
          src="/hero-image.png"
          alt={dictionary.hero.imageAlt}
        />
      </div>
    </section>
  );
};

export default Hero;
