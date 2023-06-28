import { FC } from "react";

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
        <svg
          className="absolute inset-0 z-20 m-auto hidden h-16 w-16 text-white 
          group-hover:block"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 384 512"
        >
          <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
        </svg>
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
        <p className="line-clamp-3 text-sm font-semibold group-hover:text-blue-400">
          {title}
        </p>
      </div>
    </div>
  );
};
