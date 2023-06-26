import { FC } from "react";

import Image from "next/image";

import BG from "@/assets/bg.png";
import Comparative from "@/assets/comparativo_img_CTA.png";
import Card from "@/assets/no-card-dark.svg";
import Rating from "@/assets/rating.svg";
import RD from "@/assets/selo_RD.svg";

import { Button } from "./ui/button";

export const Business: FC = ({}) => {
  return (
    <section
      className="relative flex flex-1 flex-wrap items-center justify-evenly 
      gap-10 bg-blue-200 px-2 py-8 text-gray-800 md:gap-20 lg:gap-4"
    >
      <div className="flex">
        <Image
          className="z-10 h-80 w-80 md:h-[26rem] md:w-[26rem]"
          src={Comparative}
          alt="leadster graphic"
          priority
        />
        <Image
          className="absolute inset-x-0 -left-8 top-8 mx-auto h-80 md:h-[26rem] 
          md:w-[26rem] lg:inset-x-auto lg:bottom-0 lg:left-0 lg:top-auto
          lg:h-[25rem] lg:w-5/12"
          src={BG}
          alt="background"
          priority
        />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-3xl">
          Pronto para triplicar sua <br />
          <strong>Geração de Leads?</strong>
        </h2>
        <span>
          Criação e ativação em <strong>4 minutos.</strong>
        </span>
        <span className="my-1 flex border" />
        <div
          className="flex flex-wrap items-center justify-center gap-4
          sm:justify-normal"
        >
          <Button colors="secondary" radius="full" className="p-4">
            <span>VER DEMONSTRAÇÃO</span>
          </Button>
          <Image src={RD} alt="Stamp RD" />
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          <Image src={Card} alt="card icon" />
          <p>
            <strong>Não</strong>
            {""} é necessário Cartão de Crédito |{" "}
          </p>
          <Image src={Rating} alt="star rating" /> {""}
          <span>4.9/5 de média de satisfação</span>
        </div>
      </div>
    </section>
  );
};
