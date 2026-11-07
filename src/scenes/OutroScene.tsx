import type { EpisodeScene } from "../content/types";
import { CopyBlock } from "../components/CopyBlock";
import { SafeFrame } from "../components/SafeFrame";

export const OutroScene: React.FC<{ scene: EpisodeScene }> = ({ scene }) => {
  return (
    <SafeFrame justify="center">
      <CopyBlock
        align="center"
        kicker={scene.kicker}
        title={scene.title}
        lines={scene.lines}
      />
    </SafeFrame>
  );
};
