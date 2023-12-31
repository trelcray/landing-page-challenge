import { FC } from "react";

import Image from "next/image";

import Header from "@/assets/header.svg";

import { Button } from "./ui/button";

export const Banner: FC = ({}) => {
  return (
    <section
      className="flex flex-1 flex-col items-center justify-center gap-2 
      bg-blue-200 px-4 py-24"
    >
      <Button
        className="group rounded-bl-md border-2 border-blue-500 px-3 py-1 
        hover:bg-blue-500"
        radius="2xl"
        variant="outline"
        colors="secondary"
      >
        <span
          className="text-xs font-semibold text-blue-500 
          group-hover:text-white sm:text-xs"
        >
          WEBINARS EXCLUSIVOS
        </span>
      </Button>
      <h2 className="text-xl font-semibold text-gray-800 sm:text-3xl">
        Menos Conversinha,
      </h2>
      <div className="relative">
        <Image
          width={44}
          height={44}
          src={Header}
          alt="icon"
          className="absolute -right-5 -top-2 h-9 w-9 sm:h-11 sm:w-11"
        />
        <h1
          className="bg-gradient-to-r from-blue-400 via-45% to-blue-500
        bg-clip-text text-4xl font-bold text-transparent sm:text-6xl"
        >
          Mais Conversão
        </h1>
      </div>
      <span className="my-1 w-full border sm:w-[32rem] " />
      <p className="text-center text-xs font-normal text-gray-800">
        Conheça as estratégias que <strong>mudaram o jogo</strong> e como
        aplicá-las no seu negócio
      </p>
    </section>
  );
};
