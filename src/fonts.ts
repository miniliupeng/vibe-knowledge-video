import { loadFont } from "@remotion/google-fonts/NotoSansSC";

const loaded = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin", "chinese-simplified"],
  ignoreTooManyRequestsWarning: true,
});

export const fontFamily = `${loaded.fontFamily}, "WenQuanYi Micro Hei", sans-serif`;
