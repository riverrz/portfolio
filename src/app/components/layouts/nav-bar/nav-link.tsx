import { cn } from "@/app/utils/cn";
import Link from "next/link";
import React from "react";

interface Props {
  isSelected?: boolean;
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ isSelected, href, children }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "no-underline font-secondary uppercase font-ligh",
        isSelected && "text-primary"
      )}
    >
      {children}
    </Link>
  );
};
