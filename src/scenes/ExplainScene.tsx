import { interpolate, useCurrentFrame } from "remotion";
import type { EpisodeScene } from "../content/types";
import { CopyBlock } from "../components/CopyBlock";
import { GlassCup } from "../components/GlassCup";
import { SafeFrame } from "../components/SafeFrame";

export const ExplainScene: React.FC<{ scene: EpisodeScene }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const sweat = interpolate(frame, [12, 110], [0.08, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <SafeFrame>
      <CopyBlock
        kicker={scene.kicker}
        title={scene.title}
        lines={scene.lines}
      />
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GlassCup sweat={sweat} scale={0.86} />
      </div>
    </SafeFrame>
  );
};
