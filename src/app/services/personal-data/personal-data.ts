import { PersonalData } from "./personal-data.types";

export const PERSONAL_DATA_CACHE_TAG = "personal-data";

export async function getPersonalData(): Promise<PersonalData> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STATIC_ASSETS_URL}/personal.json`,
    { next: { tags: [PERSONAL_DATA_CACHE_TAG] } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
