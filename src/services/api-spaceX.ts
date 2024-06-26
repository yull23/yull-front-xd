import type { Launch } from "../utils/types/spaceX.types";

export async function getLaunchesSpaceX(id?: number) {
  const response = await fetch(import.meta.env.PUBLIC_API_URL_SPACEX);
  const launches = (await response.json()) as Launch[];
  return launches;
}
