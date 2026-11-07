import { AbsoluteFill } from "remotion";
import { useTheme } from "../themes";

export const Backdrop: React.FC = () => {
  const theme = useTheme();

  return (
    <AbsoluteFill style={{ backgroundColor: theme.bg }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 16%, ${theme.bgRaised} 0%, rgba(7, 16, 24, 0) 58%)`,
        }}
      />
    </AbsoluteFill>
  );
};
