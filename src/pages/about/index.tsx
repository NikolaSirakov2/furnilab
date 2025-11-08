import type { ReactElement } from "react";
import { ArrowRight } from "lucide-react";
import HeroImage from "../../components/HeroImage";

const ABOUT_HIGHLIGHTS = [
  {
    title: "Curated craftsmanship",
    description:
      "We hand-select pieces from artisans who blend timeless design with modern comfort.",
  },
  {
    title: "Sustainable materials",
    description:
      "Every collection features responsibly sourced woods, recycled metals, and low-impact fabrics.",
  },
  {
    title: "Design-first service",
    description:
      "Our stylists guide you from mood board to move-in with personalized layouts and finish pairings.",
  },
];

export function AboutPage(): ReactElement {
  return (
    <section className="max-w-[1600px] mt-30 mx-auto p-4 sm:p-8 mb-20">
      <div className="flex relative flex-col lg:flex-row lg:space-x-12 overflow-x-clip">
        <div className="lg:w-1/2 space-y-8">
          <header>
            <p className="text-xs tracking-[0.45em] uppercase text-zinc-500 mb-4">
              About Furnilab
            </p>
            <h1 className="text-[clamp(3.75rem,14vw,12rem)] font-extrabold leading-none">
              <span className="hero-sequence hero-sequence-1 block impact lg:text-[290px]">
                DESIGNED
              </span>
              <span className="hero-sequence hero-sequence-2 block impact lg:text-[250px] tracking-tight lg:mt-6">
                FOR LIVING
              </span>
            </h1>
          </header>
          <p className="text-base lg:text-lg max-w-md lg:w-full text-zinc-600">
            Furnilab is a collective of designers, makers, and curators devoted
            to creating furniture that feels lived-in from day one. Each piece
            is thoughtfully crafted to anchor memories, invite conversation, and
            move gracefully with the rhythm of your home.
          </p>
          <ul className="space-y-4">
            {ABOUT_HIGHLIGHTS.map(({ title, description }) => (
              <li
                key={title}
                className="rounded-3xl border border-zinc-200/70 p-6 backdrop-blur-sm bg-white/60"
              >
                <h2 className="text-lg font-semibold tracking-wide text-zinc-900 uppercase mb-2">
                  {title}
                </h2>
                <p className="text-sm lg:text-base text-zinc-600">{description}</p>
              </li>
            ))}
          </ul>
          <button className="group flex items-center space-x- bg-zinc-900 text-white text-sm font-semibold py-4 px-4 rounded-full transition-all duration-150 hover:bg-transparent border border-zinc-900 hover:text-zinc-900 ease-in lg:text-lg lg:py-5 lg:px-10 hover:animate-wiggle w-fit">
            <span>Visit our showroom</span>
            <ArrowRight size={20} />
          </button>
        </div>
        <HeroImage
          className="hero-sequence hero-sequence-3"
          src="/modern-room.png"
          alt="Modern living room vignette from Furnilab showroom"
        />
      </div>
    </section>
  );
}


