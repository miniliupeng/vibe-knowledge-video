import { interpolate } from "remotion";
import { useTheme } from "../themes";

const droplets = [
  { x: 14, y: 108, size: 18, delay: 0 },
  { x: 28, y: 176, size: 14, delay: 0.12 },
  { x: 10, y: 248, size: 16, delay: 0.26 },
  { x: 22, y: 320, size: 12, delay: 0.42 },
  { x: 242, y: 124, size: 16, delay: 0.08 },
  { x: 250, y: 198, size: 18, delay: 0.2 },
  { x: 236, y: 268, size: 13, delay: 0.34 },
  { x: 246, y: 332, size: 15, delay: 0.5 },
];

export const GlassCup: React.FC<{
  sweat: number;
  scale?: number;
}> = ({ sweat, scale = 1 }) => {
  const theme = useTheme();
  const width = 280;
  const height = 400;

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        transform: `scale(${scale})`,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 18,
          right: 18,
          top: 28,
          bottom: 18,
          borderRadius: 28,
          border: `4px solid ${theme.line}`,
          background: theme.glass,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "64%",
            background: `linear-gradient(180deg, #1C7C88 0%, ${theme.liquid} 100%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 18,
            top: 36,
            width: 18,
            bottom: 36,
            borderRadius: 999,
            background: "rgba(255,255,255,0.18)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: 8,
          right: 8,
          top: 8,
          height: 46,
          borderRadius: "50%",
          border: `4px solid ${theme.line}`,
          background: "rgba(214, 244, 255, 0.18)",
        }}
      />
      {droplets.map((drop) => {
        const opacity = interpolate(
          sweat,
          [drop.delay, Math.min(1, drop.delay + 0.2)],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );
        return (
          <div
            key={`${drop.x}-${drop.y}`}
            style={{
              position: "absolute",
              left: drop.x,
              top: drop.y,
              width: drop.size,
              height: drop.size * 1.4,
              borderRadius: "50%",
              background: theme.droplet,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};
