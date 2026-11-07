import { createContext, useContext } from "react";
import { inkTheme } from "./ink";
import type { Theme, ThemeId } from "./types";

const themes: Record<ThemeId, Theme> = {
  ink: inkTheme,
};

const ThemeContext = createContext<Theme>(inkTheme);

export const getTheme = (id: ThemeId): Theme => themes[id];

export const ThemeProvider: React.FC<{
  theme: Theme;
  children: React.ReactNode;
}> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => useContext(ThemeContext);
