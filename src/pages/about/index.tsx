import type { ReactElement } from "react";
import { ArrowRight } from "lucide-react";
import AboutImage from "../../components/AboutImage";
import { useLanguage } from "../../i18n/LanguageContext";

export function AboutPage(): ReactElement {
  const { dictionary } = useLanguage();
  const copy = dictionary.about;

  return (
    <section className="max-w-[1350px] 2xl:max-w-[1600px] mt-30 mx-auto p-4 sm:p-8 mb-20">
      <div className="flex relative flex-col lg:flex-row lg:space-x-12 overflow-x-clip">
        <div className="lg:w-1/2 space-y-8">
          <header>
            <p className="text-xs tracking-[0.45em] uppercase text-zinc-500 mb-4">
              {copy.label}
            </p>
            <h1 className="text-[clamp(3.75rem,14vw,12rem)] font-extrabold leading-none">
              <span className="hero-sequence hero-sequence-1 block impact lg:text-[290px]">
                {copy.headingLine1}
              </span>
              <span className="hero-sequence hero-sequence-2 block impact lg:text-[250px] tracking-tight lg:mt-6">
                {copy.headingLine2}
              </span>
            </h1>
          </header>
          <p className="text-base lg:text-lg max-w-md lg:w-full text-zinc-600">
            {copy.description}
          </p>
          <ul className="space-y-4">
            {copy.highlights.map(({ title, description }) => (
              <li
                key={title}
                className="rounded-3xl border border-zinc-200/70 p-6 backdrop-blur-sm bg-white/60"
              >
                <h2 className="text-lg font-semibold tracking-wide text-zinc-900 uppercase mb-2">
                  {title}
                </h2>
                <p className="text-sm lg:text-base text-zinc-600 pl-10">
                  {description}
                </p>
              </li>
            ))}
          </ul>
          <button className="group flex items-center space-x- bg-zinc-900 text-white text-sm font-semibold py-4 px-4 rounded-full transition-all duration-150 hover:bg-transparent border border-zinc-900 hover:text-zinc-900 ease-in lg:text-lg lg:py-5 lg:px-10 hover:animate-wiggle w-fit">
            <span>{copy.cta}</span>
            <ArrowRight size={20} />
          </button>
        </div>
        <AboutImage
          className="hero-sequence hero-sequence-3 lg:mt-[25vw] 2xl:mt-[20vw]"
          src="/modern-room.png"
          alt={copy.imageAlt}
        />
      </div>
    </section>
  );
}
