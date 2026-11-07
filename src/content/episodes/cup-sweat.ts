import { episodeDurationInFrames } from "../timing";
import type { Episode, EpisodeScene } from "../types";

export const cupSweatTitle: EpisodeScene = {
  id: "title",
  kind: "title",
  durationInFrames: 90,
  kicker: "一个日常问题",
  title: "杯子为什么会出汗",
  lines: ["冰饮料放一会儿，外壁就会挂上水珠。"],
};

export const cupSweatMisconception: EpisodeScene = {
  id: "misconception",
  kind: "misconception",
  durationInFrames: 150,
  kicker: "先排除一个误会",
  title: "不是渗出来的",
  reject: "杯里的水渗出来了",
  lines: ["玻璃不会让水穿过。", "杯里的饮料，还在杯子里面。"],
};

export const cupSweatExplain: EpisodeScene = {
  id: "explain",
  kind: "explain",
  durationInFrames: 180,
  kicker: "水从空气里来",
  title: "水蒸气碰到冷壁",
  lines: [
    "空气里一直有看不见的水蒸气。",
    "冷杯壁把贴着它的空气变冷。",
    "冷到一定程度，水蒸气就变回水滴。",
  ],
};

export const cupSweatDiagram: EpisodeScene = {
  id: "diagram",
  kind: "diagram",
  durationInFrames: 210,
  kicker: "这个温度叫露点",
  title: "杯壁比露点更冷",
  lines: ["露点越低，空气越干。", "夏天潮湿时，杯子更容易出汗。"],
  bars: [
    { label: "空气温度", value: "26°C", amount: 26 / 32, tone: "muted" },
    { label: "露点", value: "18°C", amount: 18 / 32, tone: "warn" },
    { label: "杯壁", value: "6°C", amount: 6 / 32, tone: "accent" },
  ],
};

export const cupSweatOutro: EpisodeScene = {
  id: "outro",
  kind: "outro",
  durationInFrames: 120,
  kicker: "带走这一句",
  title: "出汗的是空气",
  lines: ["杯子只是把空气里的水，凝在了外壁上。"],
};

export const cupSweatEpisode: Episode = {
  id: "cup-sweat",
  title: "杯子为什么会出汗",
  width: 1080,
  height: 1920,
  fps: 30,
  bed: "episodes/cup-sweat/placeholder-bed.mp3",
  themeId: "ink",
  scenes: [
    cupSweatTitle,
    cupSweatMisconception,
    cupSweatExplain,
    cupSweatDiagram,
    cupSweatOutro,
  ],
};

export const CUP_SWEAT_DURATION_IN_FRAMES =
  episodeDurationInFrames(cupSweatEpisode);
