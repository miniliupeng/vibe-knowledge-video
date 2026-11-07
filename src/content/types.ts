export type SceneKind =
  | "title"
  | "misconception"
  | "explain"
  | "diagram"
  | "outro";

export type DiagramTone = "muted" | "warn" | "accent";

export type DiagramBar = {
  label: string;
  value: string;
  amount: number;
  tone: DiagramTone;
};

export type EpisodeScene = {
  id: string;
  kind: SceneKind;
  durationInFrames: number;
  kicker: string;
  title: string;
  lines: string[];
  reject?: string;
  bars?: DiagramBar[];
};

export type Episode = {
  id: string;
  title: string;
  width: number;
  height: number;
  fps: number;
  /** Path passed to staticFile(), relative to public/. */
  bed: string;
  themeId: "ink";
  scenes: EpisodeScene[];
};
