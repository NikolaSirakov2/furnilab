import type { ReactElement } from "react";
import type { LucideIcon } from "lucide-react";

interface SocialIconProps {
  Icon: LucideIcon;
  href: string;
  label: string;
}

export function SocialIcon({
  Icon,
  href,
  label,
}: SocialIconProps): ReactElement {
  return (
    <a
      href={href}
      aria-label={label}
      className="group p-2 border border-white/20 rounded-full hover:bg-white transition-all duration-200 ease-in hover:-translate-y-1.5"
    >
      <Icon size={16} className="text-white group-hover:text-zinc-900" />
    </a>
  );
}
