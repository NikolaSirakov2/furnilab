import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavBtnProps {
  to: string;
  children: ReactNode;
}

export function NavBtn({ to, children }: NavBtnProps) {
  const baseClasses =
    "text-sm transition-all duration-150 ease-in uppercase tracking-wider border p-2 px-4 rounded-full hover:-translate-y-1";
  const activeClasses = "border-zinc-400 font-bold text-zinc-900";
  const inactiveClasses =
    "border-transparent text-zinc-600 hover:border-zinc-400 hover:font-bold hover:text-zinc-900";

  function getClassName(isActive: boolean): string {
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  }

  return (
    <NavLink to={to} className={({ isActive }) => getClassName(isActive)}>
      {children}
    </NavLink>
  );
}

export default NavBtn;

