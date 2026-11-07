# vibe-knowledge-video

竖屏知识短片的 Remotion 工程。文案在 `src/content`，分镜在 `src/scenes`，第一集是「杯子为什么会出汗」。

结构、时长和加集步骤见 [docs/PLAN.md](docs/PLAN.md)。

## 命令

安装依赖：

```console
npm i --loglevel=error
```

打开 Studio：

```console
npm run dev
```

渲染第一集：

```console
npx remotion render cup-sweat out/cup-sweat.mp4
```

画面规格是 1080×1920、30fps。垫乐占位文件在 `public/episodes/cup-sweat/placeholder-bed.mp3`。
