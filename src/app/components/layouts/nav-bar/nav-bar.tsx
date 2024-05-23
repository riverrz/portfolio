"use client";

import Link from "next/link";
import React from "react";
import { NavLink } from "./nav-link";
import { Routes } from "@/app/constants/routes";
import { usePathname } from "next/navigation";
import { Badge } from "../../common/badge";

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bg-white w-full flex items-center justify-between p-6 sm:p-8 font-secondary z-10">
      <div className="flex items-center flex-wrap gap-x-4 gap-y-2">
        <Badge />
        <p className="text-xl sm:text-2xl">
          <Link href="/" className="no-underline font-primary">
            Shivam Kumar
          </Link>
        </p>
        <div className="hidden sm:block text-sm">/</div>
        <p className="text-lg tracking-widest font-light uppercase">
          Software Engineer
        </p>
      </div>
      <div className="hidden sm:flex justify-end gap-8">
        {Object.values(Routes).map(({ label, path }) => (
          <NavLink href={path} isSelected={pathname === path} key={path}>
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
