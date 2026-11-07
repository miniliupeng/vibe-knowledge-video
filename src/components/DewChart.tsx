import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { DiagramBar } from "../content/types";
import { fontFamily } from "../fonts";
import { useTheme } from "../themes";

export const DewChart: React.FC<{
  bars: readonly DiagramBar[];
}> = ({ bars }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const theme = useTheme();
  const toneColor = {
    muted: theme.muted,
    warn: theme.warn,
    accent: theme.accent,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 28,
        fontFamily,
      }}
    >
      <div style={{ fontSize: 28, color: theme.muted, fontWeight: 700 }}>
        示意温度
      </div>
      {bars.map((bar, index) => {
        const grow = spring({
          frame,
          fps,
          delay: 8 + index * 8,
          config: { damping: 200 },
        });
        const width = interpolate(grow, [0, 1], [0, bar.amount * 100]);
        return (
          <div
            key={bar.label}
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 36,
                fontWeight: 700,
                color: theme.text,
              }}
            >
              <span>{bar.label}</span>
              <span style={{ color: toneColor[bar.tone] }}>{bar.value}</span>
            </div>
            <div
              style={{
                height: 22,
                borderRadius: 999,
                background: theme.track,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${width}%`,
                  height: "100%",
                  borderRadius: 999,
                  background: toneColor[bar.tone],
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
