import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { EpisodeScene } from "../content/types";
import { CopyBlock } from "../components/CopyBlock";
import { SafeFrame } from "../components/SafeFrame";
import { fontFamily } from "../fonts";
import { useTheme } from "../themes";

const RejectCard: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const theme = useTheme();
  const enter = spring({ frame, fps, delay: 8, config: { damping: 200 } });
  const strike = interpolate(frame, [36, 58], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity: enter,
        transform: `translateY(${interpolate(enter, [0, 1], [24, 0])}px)`,
        alignSelf: "flex-start",
        padding: "28px 36px",
        borderRadius: 24,
        background: theme.bgRaised,
        fontFamily,
      }}
    >
      <div
        style={{
          position: "relative",
          fontSize: 48,
          lineHeight: 1.3,
          fontWeight: 700,
          color: theme.text,
        }}
      >
        {text}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "54%",
            height: 8,
            width: `${strike * 100}%`,
            borderRadius: 999,
            background: theme.warn,
          }}
        />
      </div>
    </div>
  );
};

export const MisconceptionScene: React.FC<{ scene: EpisodeScene }> = ({
  scene,
}) => {
  return (
    <SafeFrame>
      <CopyBlock kicker={scene.kicker} title={scene.title} lines={scene.lines}>
        {scene.reject ? <RejectCard text={scene.reject} /> : null}
      </CopyBlock>
    </SafeFrame>
  );
};
