import { socialLinks } from "@/app/constants/socials";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col p-6 font-secondary gap-4 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div className="text-sm order-2 sm:order-1">
        <p className="mb-1">© {new Date().getFullYear()} by Shivam Kumar.</p>
        <p>Powered by imagination</p>
      </div>
      <div className="text-md order-1 sm:order-2 flex items-center justify-between flex-wrap gap-8">
        <div>
          <p className="font-medium text-center mb-2">Call</p>
          <Link className="no-underline text-primary" href="tel:+9710503877317">
            +971 050 387 7317
          </Link>
        </div>
        <div>
          <p className="font-medium text-center mb-2">Follow</p>
          <div className="flex items-center gap-6">
            {Object.values(socialLinks).map(({ Icon, label, path }) => (
              <Link
                className="no-underline"
                href={path}
                target="_blank"
                key={label}
                title={label}
              >
                <Icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
