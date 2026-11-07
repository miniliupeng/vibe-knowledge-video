import { AbsoluteFill } from "remotion";
import type { EpisodeScene, SceneKind } from "../content/types";
import { Backdrop } from "../components/Backdrop";
import { DiagramScene } from "./DiagramScene";
import { ExplainScene } from "./ExplainScene";
import { MisconceptionScene } from "./MisconceptionScene";
import { OutroScene } from "./OutroScene";
import { TitleScene } from "./TitleScene";

const sceneComponents: Record<SceneKind, React.FC<{ scene: EpisodeScene }>> = {
  title: TitleScene,
  misconception: MisconceptionScene,
  explain: ExplainScene,
  diagram: DiagramScene,
  outro: OutroScene,
};

export const SceneView: React.FC<{ scene: EpisodeScene }> = ({ scene }) => {
  const Scene = sceneComponents[scene.kind];

  return (
    <AbsoluteFill>
      <Backdrop />
      <Scene scene={scene} />
    </AbsoluteFill>
  );
};
