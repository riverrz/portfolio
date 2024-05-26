import { Button } from "@/app/components/common/button";
import { Card } from "@/app/components/common/card";
import { Routes } from "@/app/constants/routes";
import { socialMediaData } from "@/app/constants/socials";
import { PersonalData } from "@/app/services/personal-data/personal-data.types";
import PersonalPic from "@/assets/images/pic.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
  data: PersonalData;
}

export const PersonalFloatingCard = ({ className, data }: Props) => {
  return (
    <Card className={className}>
      <div className="py-6 px-11 lg:py-8 flex flex-col justify-center items-center bg-accentLight">
        <div className="relative mb-4">
          <Image
            src={PersonalPic}
            alt="Shivam Kumar"
            width={200}
            height={200}
            className="rounded-3xl"
            priority
          />
        </div>
        <h1 className="text-xl font-primary font-semibold lg:text-2xl mb-4">
          Shivam Kumar
        </h1>
        <div className="w-12 h-1 bg-primary mb-6" />
        <h2 className="hidden lg:block font-secondary text-lg tracking-widest font-light uppercase text-center">
          Software Engineer
        </h2>
        <div className="my-4 lg:hidden flex items-center gap-4">
          <Link href={Routes.resume.path}>
            <Button variant="primary" className="uppercase">
              {Routes.resume.label}
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 bg-white p-4">
        {Object.values(socialMediaData).map(({ Icon, label }) => {
          const socialLink = data.basics.socials[label];

          return (
            <Link
              className="no-underline"
              href={socialLink}
              target="_blank"
              key={label}
              title={label}
            >
              <Icon className="w-6 h-6 lg:w-8 lg:h-8" />
            </Link>
          );
        })}
      </div>
    </Card>
  );
};
