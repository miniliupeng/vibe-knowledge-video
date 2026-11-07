import { Composition } from "remotion";
import {
  cupSweatDiagram,
  cupSweatEpisode,
  cupSweatExplain,
  cupSweatMisconception,
  cupSweatOutro,
  cupSweatTitle,
} from "../content/episodes/cup-sweat";
import { SceneView } from "../scenes/SceneView";

const frame = {
  fps: cupSweatEpisode.fps,
  width: cupSweatEpisode.width,
  height: cupSweatEpisode.height,
};

export const CupSweatScenes: React.FC = () => {
  return (
    <>
      <Composition
        id="cup-sweat-title"
        component={SceneView}
        durationInFrames={cupSweatTitle.durationInFrames}
        fps={frame.fps}
        width={frame.width}
        height={frame.height}
        defaultProps={{ scene: cupSweatTitle }}
      />
      <Composition
        id="cup-sweat-misconception"
        component={SceneView}
        durationInFrames={cupSweatMisconception.durationInFrames}
        fps={frame.fps}
        width={frame.width}
        height={frame.height}
        defaultProps={{ scene: cupSweatMisconception }}
      />
      <Composition
        id="cup-sweat-explain"
        component={SceneView}
        durationInFrames={cupSweatExplain.durationInFrames}
        fps={frame.fps}
        width={frame.width}
        height={frame.height}
        defaultProps={{ scene: cupSweatExplain }}
      />
      <Composition
        id="cup-sweat-diagram"
        component={SceneView}
        durationInFrames={cupSweatDiagram.durationInFrames}
        fps={frame.fps}
        width={frame.width}
        height={frame.height}
        defaultProps={{ scene: cupSweatDiagram }}
      />
      <Composition
        id="cup-sweat-outro"
        component={SceneView}
        durationInFrames={cupSweatOutro.durationInFrames}
        fps={frame.fps}
        width={frame.width}
        height={frame.height}
        defaultProps={{ scene: cupSweatOutro }}
      />
    </>
  );
};
