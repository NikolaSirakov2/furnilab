import type { ReactElement } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const MARQUEE_COPIES = 9;

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    Icon: Facebook,
  },
  {
    label: "Twitter",
    href: "https://x.com",
    Icon: Twitter,
  },
];

export function Footer(): ReactElement {
  const { dictionary } = useLanguage();

  return (
    <footer className="bg-zinc-950 text-white">
      <div className="relative max-w-[1500px] items-center mx-auto p-4 sm:p-8 py-18 lg:py-24 overflow-hidden">
        <div className="flex min-w-full whitespace-nowrap animate-marquee">
          {Array.from({ length: MARQUEE_COPIES }, (_, index) =>
            (
              <p
                key={`footer-marquee-${index}`}
                aria-hidden={index !== 0}
                className="text-9xl lg:text-[250px] impact font-extrabold leading-none opacity-90 lg:opacity-95 pr-20"
              >
                {dictionary.footer.marquee}
              </p>
            )
          )}
        </div>
        <img
          src="/sofa.png"
          alt={dictionary.footer.sofaAlt}
          className="bottom-0 left-1/2 -translate-x-1/2 w-[250px] lg:w-[400px] mt-10 lg:mt-0 absolute hover:animate-wiggle duration-700 ease-in-out cursor-pointer"
        />
      </div>
      <div className="border-t border-zinc-800 py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm">
          <p className="text-zinc-400">{dictionary.footer.legal}</p>
          <div
            className="flex space-x-3"
            aria-label={dictionary.footer.socialAria}
          >
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors duration-150 ease-in-out"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
