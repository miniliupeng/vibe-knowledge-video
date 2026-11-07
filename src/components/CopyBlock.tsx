import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { fontFamily } from "../fonts";
import { useTheme } from "../themes";

const rise = (progress: number) => {
  return {
    opacity: progress,
    transform: `translateY(${interpolate(progress, [0, 1], [28, 0])}px)`,
  };
};

export const CopyBlock: React.FC<{
  kicker: string;
  title: string;
  lines: readonly string[];
  align?: "left" | "center";
  children?: React.ReactNode;
}> = ({ kicker, title, lines, align = "left", children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const theme = useTheme();
  const textAlign = align;
  const kickerIn = spring({ frame, fps, config: { damping: 200 } });
  const titleIn = spring({
    frame,
    fps,
    delay: 6,
    config: { damping: 200 },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 22,
        textAlign,
        fontFamily,
      }}
    >
      <div
        style={{
          ...rise(kickerIn),
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: 4,
          color: theme.accent,
        }}
      >
        {kicker}
      </div>
      <div
        style={{
          ...rise(titleIn),
          fontSize: 84,
          lineHeight: 1.18,
          fontWeight: 700,
          color: theme.text,
        }}
      >
        {title}
      </div>
      {children}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {lines.map((line, index) => {
          const lineIn = spring({
            frame,
            fps,
            delay: 16 + index * 12,
            config: { damping: 200 },
          });
          return (
            <div
              key={line}
              style={{
                ...rise(lineIn),
                fontSize: 44,
                lineHeight: 1.45,
                fontWeight: 400,
                color: theme.muted,
              }}
            >
              {line}
            </div>
          );
        })}
      </div>
    </div>
  );
};
