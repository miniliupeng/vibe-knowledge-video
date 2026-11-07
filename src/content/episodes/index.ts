import { cupSweatEpisode } from "./cup-sweat";
import type { Episode } from "../types";

export const episodeCatalog: readonly Episode[] = [cupSweatEpisode];

export const getEpisode = (id: string): Episode => {
  const episode = episodeCatalog.find((item) => item.id === id);
  if (!episode) {
    throw new Error(`Unknown episode: ${id}`);
  }
  return episode;
};
