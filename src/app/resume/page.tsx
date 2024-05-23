import Link from "next/link";
import { Badge } from "../components/common/badge";
import { getResumeJSON } from "../services/resume/resume";
import { Button } from "../components/common/button";
import { Card } from "../components/common/card";

export default async function ResumePage() {
  const resumeData = await getResumeJSON();

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
          Experience
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
        {resumeData.work.map((workItem, i) => {
          return (
            <Card
              key={`${workItem.company}-${i}`}
              className="p-6 sm:px-12 font-secondary sm:flex sm:justify-between sm:items-center"
            >
              <div className="sm:flex-1">
                <div className="text-primary font-primary text-lg font-bold mb-2 sm:text-xl">
                  {workItem.startDate} - {workItem.endDate}
                </div>
                <div className="text-lg uppercase mb-4">
                  {workItem.position}
                </div>
                <div className="font-thin uppercase mb-2">
                  {workItem.company}
                </div>
                <div className="font-thin uppercase">{workItem.location}</div>
              </div>
              <div className="my-4 text-lg sm:flex-1 tracking-wide	">
                <ul>
                  {workItem.highlights.map((highlight, i) => (
                    <li className="my-4" key={i}>
                      {highlight}
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
}
