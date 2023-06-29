import { FC } from "react";

import dynamic from "next/dynamic";

import { Video } from "../skeleton/video";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface IYoutubePlayerProps {
  videoId: string;
}

export const YoutubePlayer: FC<IYoutubePlayerProps> = ({ videoId }) => {
  return (
    <div className="flex flex-1" aria-label="youtube">
      <ReactPlayer
        fallback={<Video />}
        url={videoId}
        controls
        width="100%"
        height="100%"
      />
    </div>
  );
};
