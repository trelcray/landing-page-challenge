"use client";

import { FC, useState } from "react";

import { UseCreatePagination } from "@/hooks/use-create-pagination";
import { UseFilterData } from "@/hooks/use-filter-data";
import { UseWidth } from "@/hooks/use-width";
import { videos } from "@/mocks/videos.json";
import { cn } from "@/utils/cn";

import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { VideoDialog } from "./video-dialog";

export const Marketing: FC = ({}) => {
  const [isActive, setIsActive] = useState("Agências");
  const [selectValue, setSelectValue] = useState("date");

  const { isMobile, isPortrait } = UseWidth(639, 1023);

  const { filteredData } = UseFilterData(videos, isActive, selectValue);

  const numberPages = isMobile ? 3 : isPortrait ? 6 : 9;

  const { handleChangePage, visibleResults, pageLinks, currentPage } =
    UseCreatePagination(filteredData, numberPages);

  return (
    <section
      className="flex flex-1 flex-col items-center justify-center gap-5 
      px-2"
    >
      <div
        className="flex flex-wrap items-center justify-center gap-5 lg:w-[56rem]
        lg:justify-between"
      >
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
          <Select
            defaultValue="date"
            value={selectValue}
            onValueChange={(value) => setSelectValue(value)}
          >
            <SelectTrigger
              className="w-[180px] rounded-lg border-gray-800 
              px-2 text-xs"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="flex">
              <SelectItem value="date" className="text-sm">
                Data de Publicação
              </SelectItem>
              <SelectItem value="title" className="text-sm">
                Título
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div
        className="grid min-h-[56rem] grid-cols-1 place-content-start gap-4 
        border-y-2 py-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        <VideoDialog visibleResults={visibleResults} />
      </div>

      <div className="flex min-w-[12rem] gap-3">
        <strong>Página</strong>
        <div className="flex gap-2">
          {pageLinks.map((page) => (
            <Button
              key={page}
              disabled={currentPage === page}
              onClick={() => handleChangePage(page)}
              variant="transparent"
              size="xs"
              className={cn(
                "h-6 w-6 hover:border hover:border-blue-400",
                "hover:bg-transparent hover:text-blue-400",
                {
                  "border border-blue-500 font-bold text-blue-500":
                    currentPage === page,
                }
              )}
            >
              <span className="text-sm">{page}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};
