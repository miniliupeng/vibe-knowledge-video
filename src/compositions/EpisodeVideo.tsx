import { Audio } from "@remotion/media";
import { fade } from "@remotion/transitions/fade";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { AbsoluteFill, staticFile, useVideoConfig } from "remotion";
import { getEpisode } from "../content/episodes";
import { TRANSITION_FRAMES } from "../content/timing";
import { ProgressBar } from "../components/ProgressBar";
import { fontFamily } from "../fonts";
import { SceneView } from "../scenes/SceneView";
import { getTheme, ThemeProvider } from "../themes";

export type EpisodeVideoProps = {
  episodeId: string;
};

export const EpisodeVideo: React.FC<EpisodeVideoProps> = ({ episodeId }) => {
  const episode = getEpisode(episodeId);
  const theme = getTheme(episode.themeId);
  const { fps } = useVideoConfig();
  const nodes = episode.scenes.flatMap((scene, index) => {
    const sequence = (
      <TransitionSeries.Sequence
        key={scene.id}
        name={scene.id}
        durationInFrames={scene.durationInFrames}
        premountFor={fps}
      >
        <SceneView scene={scene} />
      </TransitionSeries.Sequence>
    );
    if (index === 0) {
      return [sequence];
    }
    return [
      <TransitionSeries.Transition
        key={`${scene.id}-transition`}
        presentation={fade()}
        timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
      />,
      sequence,
    ];
  });

  return (
    <ThemeProvider theme={theme}>
      <AbsoluteFill
        style={{
          fontFamily,
          backgroundColor: theme.bg,
          color: theme.text,
        }}
      >
        <Audio src={staticFile(episode.bed)} volume={0.22} loop />
        <TransitionSeries>{nodes}</TransitionSeries>
        <ProgressBar />
      </AbsoluteFill>
    </ThemeProvider>
  );
};
