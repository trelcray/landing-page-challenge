import { FC } from "react";

import { Play } from "lucide-react";
import Image from "next/image";

interface ICardVideoProps {
  urlImage: string;
  title: string;
}

export const CardVideo: FC<ICardVideoProps> = ({ urlImage, title }) => {
  return (
    <div
      className="group flex h-64 w-72 flex-col rounded-2xl border 
    text-gray-800 shadow"
    >
      <div className="relative flex rounded-t-2xl">
        <Play
          className="absolute inset-0 z-20 m-auto hidden h-16 w-16 fill-white 
          text-white group-hover:block"
        />
        <span
          className="absolute inset-0 hidden rounded-t-2xl bg-blue-400/50 opacity-75 
          group-hover:block"
        />
        <Image
          width={400}
          height={400}
          src={urlImage}
          className="rounded-t-2xl"
          alt="video thumbmail"
          priority
        />
      </div>

      <div className="pointer-events-none flex flex-1 items-center px-6 py-2">
        <p className="overflow-hidden text-ellipsis text-sm font-semibold group-hover:text-blue-400">
          {title}
        </p>
      </div>
    </div>
  );
};
