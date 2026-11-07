import { AbsoluteFill } from "remotion";

export const SafeFrame: React.FC<{
  children: React.ReactNode;
  justify?: "flex-start" | "center";
}> = ({ children, justify = "flex-start" }) => {
  return (
    <AbsoluteFill
      style={{
        padding: "140px 88px 160px",
        display: "flex",
        flexDirection: "column",
        justifyContent: justify,
        gap: 36,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
