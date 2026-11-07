import type { Episode } from "./types";

/** Overlap removed from the timeline by each fade between scenes. */
export const TRANSITION_FRAMES = 15;

export const episodeDurationInFrames = (episode: Episode): number => {
  const sceneFrames = episode.scenes.reduce((sum, scene) => {
    return sum + scene.durationInFrames;
  }, 0);
  const overlaps = TRANSITION_FRAMES * Math.max(0, episode.scenes.length - 1);
  return sceneFrames - overlaps;
};
