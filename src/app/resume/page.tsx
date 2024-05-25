import Link from "next/link";
import { Badge } from "../components/common/badge";

import { Button } from "../components/common/button";
import { Card } from "../components/common/card";
import { getPersonalData } from "../services/personal-data/personal-data";
import {
  CalendarIcon,
  Link2Icon,
  SewingPinFilledIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";

const ResumePage = async () => {
  const personalData = await getPersonalData();

  return (
    <div className="container mx-auto mt-16 py-12 px-6 h-full w-full">
      <div className="flex items-center justify-center gap-4">
        <Badge />
        <h1 className="text-center font-bold font-primary text-3xl sm:text-4xl my-6">
          Resume
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="font-bold font-primary text-lg sm:text-2xl">
          Work Experience
        </h2>
        <Link
          href={`${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/resume.pdf`}
          target="_blank"
          className="text-lg sm:text-xl"
        >
          <Button variant="primary">Download</Button>
        </Link>
      </div>
      <div className="my-8 flex flex-col gap-12">
        {personalData.work.map((workItem, i) => {
          return (
            <Card
              key={`${workItem.company}-${i}`}
              className="p-6 sm:px-12 font-secondary sm:flex sm:justify-between py-4"
            >
              <div className="sm:flex-1 sm:my-4">
                <div className="text-primary font-primary text-xl font-bold mb-2 sm:text-2xl">
                  {workItem.company}
                </div>
                {workItem.website && (
                  <div className="mb-2 text-xs flex items-center gap-2">
                    <Link2Icon />
                    <Link
                      href={workItem.website}
                      target="_blank"
                      className="text-primary"
                    >
                      {workItem.website}
                    </Link>
                  </div>
                )}
                <div className="uppercase mb-4 text-sm">
                  {workItem.position}
                </div>
                <div className="font-thin uppercase mb-4 text-xs sm:text-sm flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    <span>
                      {workItem.start_date} - {workItem.end_date}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <SewingPinFilledIcon className="h-4 w-4" />
                    <span>{workItem.location}</span>
                  </div>
                </div>

                <div className="text-sm sm:text-md">{workItem.description}</div>
              </div>
              <div className="sm:flex-1 tracking-wide">
                <ul>
                  {workItem.highlights.map((highlight, i) => (
                    <li className="my-4 flex gap-2 items-start" key={i}>
                      <TriangleRightIcon className="h-4 w-4 my-2" />{" "}
                      <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ResumePage;
