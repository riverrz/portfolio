import { Resume } from "./resume.types";

export async function getResumeJSON(): Promise<Resume> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/resume.json`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
