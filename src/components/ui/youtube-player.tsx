import { FC } from "react";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface IYoutubePlayerProps {
  videoId: string;
}

export const YoutubePlayer: FC<IYoutubePlayerProps> = async ({ videoId }) => {
  return <ReactPlayer url={videoId} controls width="100%" height="100%" />;
};
