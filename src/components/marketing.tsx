"use client";

import { FC, useState } from "react";

import { UseCreatePagination } from "@/hooks/use-create-pagination";
import { videos } from "@/mocks/videos.json";
import { cn } from "@/utils/cn";

import { Button } from "./ui/button";
import { CardVideo } from "./ui/card-video";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const Marketing: FC = ({}) => {
  const [isActive, setIsActive] = useState("Agências");

  const { pagination, visibleResults, totalPages } = UseCreatePagination(
    videos,
    9
  );

  const botoes = [];

  for (let i = 1; i <= totalPages; i++) {
    const botao = (
      <Button
        key={i}
        disabled={pagination.active === i}
        onClick={() => pagination.setPage(i)}
        variant="transparent"
        size="xs"
        className={cn(
          "h-6 w-6 hover:border hover:border-blue-400",
          "hover:bg-transparent hover:text-blue-400",
          {
            "border border-blue-500 font-bold text-blue-500":
              pagination.active === i,
          }
        )}
      >
        <span className="text-sm">{i}</span>
      </Button>
    );
    botoes.push(botao);
  }

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-5 px-2">
      <div className="flex flex-wrap items-center justify-center gap-5 lg:w-[56rem] lg:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            "Agências",
            "Chatbot",
            "Marketing Digital",
            "Geração de Leads",
            "Mídia Paga",
          ].map((item, i) => (
            <Button
              key={i}
              size="sm"
              variant="outline"
              onClick={() => setIsActive(item)}
              radius="2xl"
              className={cn(
                "px-3 text-xs hover:border-blue-400 hover:text-blue-400",
                {
                  "pointer-events-none border-blue-400 bg-blue-400 text-white hover:border-blue-500 hover:bg-blue-500 hover:text-white":
                    isActive === item,
                }
              )}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="flex min-w-[17rem] items-center justify-end gap-2">
          <strong className="text-xs">Ordernar Por</strong>
          <Select>
            <SelectTrigger className="w-[180px] rounded-lg border-gray-800 px-2 text-xs">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent className="flex">
              <SelectItem value="date" className="text-sm">
                Data de Publicação
              </SelectItem>
              <SelectItem value="Nome" className="text-sm">
                Nome
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 place-content-start gap-4 border-y-2 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {visibleResults.map((item) => (
          <CardVideo
            title={item.titulo}
            key={item.id}
            urlImage={item.urlImage}
          />
        ))}
      </div>

      <div className="flex min-w-[12rem] gap-3">
        <strong>Página</strong>
        <div className="flex gap-2">{botoes}</div>
      </div>
    </section>
  );
};
