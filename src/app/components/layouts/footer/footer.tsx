import { socialMediaData } from "@/app/constants/socials";
import { getPersonalData } from "@/app/services/personal-data/personal-data";
import Link from "next/link";
import React from "react";

export const Footer = async () => {
  const personalData = await getPersonalData();

  return (
    <footer className="w-full flex flex-col py-4 px-6 font-secondary gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="text-sm order-2 sm:order-1 text-center sm:text-left mb-2">
        <p className="mb-1">© {new Date().getFullYear()} by Shivam Kumar.</p>
        <p>Powered by my imagination 🚀</p>
      </div>
      <div className="text-md order-1 sm:order-2 flex items-center justify-between flex-wrap gap-8">
        <div>
          <p className="font-medium text-center mb-2">Call</p>
          <Link
            className="no-underline text-primary text-xs"
            href={`tel:${personalData.basics.phone}`}
          >
            {personalData.basics.phone}
          </Link>
        </div>
        <div>
          <p className="font-medium text-center mb-2">Mail</p>
          <Link
            className="no-underline text-primary text-xs"
            href={`mailto:${personalData.basics.email}`}
          >
            {personalData.basics.email}
          </Link>
        </div>
        <div>
          <p className="font-medium text-center mb-2">Follow</p>
          <div className="flex items-center gap-6">
            {Object.values(socialMediaData).map(({ Icon, label }) => {
              const socialLink = personalData.basics.socials[label];
              return (
                <Link
                  className="no-underline"
                  href={socialLink}
                  target="_blank"
                  key={label}
                  title={label}
                >
                  <Icon className="w-6 h-6" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
