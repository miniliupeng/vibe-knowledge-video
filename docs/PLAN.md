# 知识视频工程

用 Remotion 做可复用的竖屏知识短片。文案、时长和主题放在数据里，画面组件按场景种类复用。第一集是「杯子为什么会出汗」。

## 目录

```
src/
  compositions/   一集成片，以及可以单独预览的分镜
  scenes/         title / misconception / explain / diagram / outro
  components/     杯子、露点条、字幕块、进度条
  themes/         配色。目前只有 ink
  content/        每一集的文案、分镜和时长
public/episodes/<id>/placeholder-bed.mp3
```

成片 id 是 `cup-sweat`。五个分镜也可以单独打开：`cup-sweat-title`、`cup-sweat-misconception`、`cup-sweat-explain`、`cup-sweat-diagram`、`cup-sweat-outro`。

## 一集怎么接起来

1. 在 `src/content/episodes/` 写一集：画面尺寸、帧率、垫乐路径、主题 id、分镜数组。
2. 把这一集放进 `episodeCatalog`。
3. 在 `src/compositions/` 注册一条 `<Composition>`，`defaultProps.episodeId` 指向它。
4. `EpisodeVideo` 按分镜顺序播放，相邻分镜用 15 帧淡入淡出。总时长 = 各分镜帧数之和 − 15 × (分镜数 − 1)。

分镜种类：

| kind          | 画面                                   |
| ------------- | -------------------------------------- |
| title         | 题目和一只开始挂水珠的杯子             |
| misconception | 先划掉错误说法                         |
| explain       | 解释，并让杯子继续出汗                 |
| diagram       | 温度条。这一集用来比较空气、露点和杯壁 |
| outro         | 一句带走的话                           |

主题从 `themeId` 取。新配色加在 `src/themes/`，并扩到 `ThemeId`。

## 示范集：杯子为什么会出汗

竖屏 1080×1920，30fps。五段加起来 750 帧，四次淡化重叠掉 60 帧，成片 690 帧，23 秒。

| 分镜          | 帧  | 在讲什么                                                                |
| ------------- | --- | ----------------------------------------------------------------------- |
| title         | 90  | 冰饮料放一会儿，外壁会有水珠                                            |
| misconception | 150 | 那不是杯里的水渗出来的。玻璃不透水                                      |
| explain       | 180 | 空气中的水蒸气碰到冷杯壁，变回水滴                                      |
| diagram       | 210 | 杯壁温度低于露点才会凝结。图中的 26°C / 18°C / 6°C 是示意，不是一次实测 |
| outro         | 120 | 出汗的是空气，杯子只是冷的表面                                          |

科学要点就这三句：水来自空气里的水蒸气；玻璃不会让饮料渗到外面；杯壁比露点更冷时，水蒸气凝成水滴。空气越潮湿，越容易看见。

## 声音

`public/episodes/cup-sweat/placeholder-bed.mp3` 是一段生成的低频垫乐，用来占住音轨。换成有授权的音乐时，保持路径不变，或改这一集的 `bed` 字段。音量在成片里是 0.22。

## 本地预览

```bash
npm install
npm run dev
```

渲染成片：

```bash
npx remotion render cup-sweat out/cup-sweat.mp4
```
