import { CalculateMetadataFunction, Composition } from "remotion";
import {
  CUP_SWEAT_DURATION_IN_FRAMES,
  cupSweatEpisode,
} from "../content/episodes/cup-sweat";
import { EpisodeVideo, type EpisodeVideoProps } from "./EpisodeVideo";

const calculateMetadata: CalculateMetadataFunction<EpisodeVideoProps> = ({
  props,
}) => {
  return {
    durationInFrames: CUP_SWEAT_DURATION_IN_FRAMES,
    fps: cupSweatEpisode.fps,
    width: cupSweatEpisode.width,
    height: cupSweatEpisode.height,
    props,
  };
};

export const CupSweatEpisode: React.FC = () => {
  return (
    <Composition
      id="cup-sweat"
      component={EpisodeVideo}
      durationInFrames={CUP_SWEAT_DURATION_IN_FRAMES}
      fps={cupSweatEpisode.fps}
      width={cupSweatEpisode.width}
      height={cupSweatEpisode.height}
      defaultProps={{ episodeId: "cup-sweat" }}
      calculateMetadata={calculateMetadata}
    />
  );
};
