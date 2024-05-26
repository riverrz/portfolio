import Link from "next/link";
import { PersonalFloatingCard } from "./components/personal-floating-card";
import { Button } from "../components/common/button";
import { Routes } from "../constants/routes";
import { getPersonalData } from "../services/personal-data/personal-data";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";

const Home = async () => {
  const personalData = await getPersonalData();

  return (
    <div className="h-full w-full flex flex-col-reverse lg:flex-row">
      <div className="h-full flex-grow lg:flex-grow-0 lg:basis-2/5 bg-accent relative">
        <div className="relative lg:absolute min-w-[60vw] lg:top-[50%] lg:right-0 lg:translate-x-[75%] lg:translate-y-[-45%] flex items-center flex-col lg:gap-10 lg:flex-row">
          <PersonalFloatingCard
            data={personalData}
            className="lg:h-auto w-[90%] absolute translate-y-[-25%] lg:translate-y-0 lg:static"
          />
          <div className="mt-[420px] lg:mt-0 self-start w-full p-6 mx-auto lg:self-auto">
            <p className="font-primary text-5xl lg:text-8xl font-bold mb-4 ">
              Hello
            </p>
            <p className="font-secondary font-semibold text-xl lg:text-2xl mb-6 lg:mb-8">
              Here&apos;s who I am & what I do
            </p>
            <div className="my-4 hidden lg:flex items-center gap-4">
              <Link href={Routes.resume.path}>
                <Button variant="primary" className="uppercase">
                  {Routes.resume.label}
                </Button>
              </Link>
            </div>
            <div className="font-secondary lg:mt-12">
              <div className="mb-4 flex items-center gap-2">
                <SewingPinFilledIcon className="w-4 h-4" />
                <p className="text-sm">
                  {personalData.basics.current_location}
                </p>
              </div>
              <p className="text-lg font-light">{personalData.summary}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-72 lg:h-full lg:flex-grow"></div>
    </div>
  );
};

export default Home;
