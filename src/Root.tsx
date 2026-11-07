import { Folder } from "remotion";
import { CupSweatEpisode } from "./compositions/CupSweatEpisode";
import { CupSweatScenes } from "./compositions/CupSweatScenes";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Episodes">
        <CupSweatEpisode />
      </Folder>
      <Folder name="Scenes">
        <CupSweatScenes />
      </Folder>
    </>
  );
};
