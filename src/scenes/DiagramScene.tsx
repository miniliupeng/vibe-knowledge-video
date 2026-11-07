import type { EpisodeScene } from "../content/types";
import { CopyBlock } from "../components/CopyBlock";
import { DewChart } from "../components/DewChart";
import { SafeFrame } from "../components/SafeFrame";

export const DiagramScene: React.FC<{ scene: EpisodeScene }> = ({ scene }) => {
  return (
    <SafeFrame>
      <CopyBlock kicker={scene.kicker} title={scene.title} lines={scene.lines}>
        {scene.bars ? <DewChart bars={scene.bars} /> : null}
      </CopyBlock>
    </SafeFrame>
  );
};
