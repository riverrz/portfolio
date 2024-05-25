import Link from "next/link";
import { PersonalFloatingCard } from "./components/personal-floating-card";
import { Button } from "../components/common/button";
import { Routes } from "../constants/routes";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col md:flex-row">
      <div className="h-full order-2 flex-grow md:order-1 md:flex-grow-0 md:basis-2/5 bg-accent relative">
        <div className="relative md:absolute min-w-[60vw] md:top-[50%] md:right-0 md:translate-x-[75%] md:translate-y-[-45%] flex items-center flex-col md:gap-10 md:flex-row">
          <PersonalFloatingCard className="h-[480px] md:h-auto w-[90%] absolute translate-y-[-25%] sm:translate-y-0 sm:static" />
          <div className="mt-[450px] md:mt-0 self-start w-full p-6 mx-auto sm:self-auto">
            <p className="font-primary text-5xl md:text-8xl font-bold mb-4 ">
              Hello
            </p>
            <p className="font-secondary font-semibold text-xl md:text-2xl mb-6 md:mb-8">
              Here&apos;s who I am & what I do
            </p>
            <div className="my-4 hidden md:flex items-center gap-4">
              <Link href={Routes.resume.path}>
                <Button variant="primary" className="uppercase">
                  {Routes.resume.label}
                </Button>
              </Link>
            </div>
            <p className="font-secondary text-lg font-light sm:mt-12">
              Frontend software engineer with 4+ years of experience in building
              and maintaining high traffic web applications, currently residing
              in Abu Dhabi UAE.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-72 sm:h-full order-1 md:order-2 md:flex-grow"></div>
    </div>
  );
}
