import { PersonalData } from "./personal-data.types";

export async function getPersonalData(): Promise<PersonalData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/personal.json`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
