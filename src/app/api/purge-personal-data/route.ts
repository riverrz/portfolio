import { PERSONAL_DATA_CACHE_TAG } from "@/app/services/personal-data/personal-data";
import { revalidateTag } from "next/cache";

export const dynamic = "force-dynamic";

export async function GET() {
  await revalidateTag(PERSONAL_DATA_CACHE_TAG);

  return Response.json({ success: true });
}
