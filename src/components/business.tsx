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
          width={640}
          height={595}
          className="z-10 h-[26rem] w-[26rem] md:h-[25rem] md:w-[35.1875rem]"
          src={Comparative}
          alt="leadster graphic"
          priority
        />
        <Image
          width={563}
          height={424}
          className="absolute inset-0 -left-8 mx-auto h-full w-full pt-10
          lg:inset-x-auto lg:bottom-0 lg:left-0 lg:w-5/12"
          src={BG}
          alt="background"
          priority
        />
      </div>

      <div className="z-20 flex flex-col gap-2">
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
          <Image
            width={200}
            height={200}
            src={RD}
            className="h-auto w-auto"
            alt="Stamp RD"
          />
        </div>
        <div className="flex flex-wrap items-end gap-2 text-xs">
          <Image
            width={18}
            height={18}
            src={Card}
            className="h-auto w-auto"
            alt="card icon"
          />
          <p>
            <strong>Não</strong>
            {""} é necessário Cartão de Crédito |{" "}
          </p>
          <Image
            width={100}
            height={100}
            src={Rating}
            className="h-auto w-auto"
            alt="star rating"
          />{" "}
          {""}
          <span>4.9/5 de média de satisfação</span>
        </div>
      </div>
    </section>
  );
};
