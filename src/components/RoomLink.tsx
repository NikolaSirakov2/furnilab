import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface RoomLinkProps {
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function RoomLink({
  children,
  onMouseEnter,
  onMouseLeave,
}: RoomLinkProps) {
  return (
    <p
      className="group flex justify-between items-center text-zinc-600 font-light py-4 border-b cursor-pointer border-zinc-200 hover:text-zinc-900 hover:font-semibold duration-200 ease-in transition-colors"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span>{children}</span>
      <ArrowRight
        size={24}
        className="text-zinc-500 -rotate-30 group-hover:rotate-360 duration-400 ease-in"
      />
    </p>
  );
}
