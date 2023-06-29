import { FC } from "react";

import { DownloadCloud } from "lucide-react";

import { Button } from "./ui/button";
import { CardVideo } from "./ui/card-video";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { YoutubePlayer } from "./ui/youtube-player";

interface IVideoDialogProps {
  visibleResults: {
    id: number;
    videoUrl: string;
    imageUrl: string;
    title: string;
    description: string;
    category: string;
    publishedAt: string;
  }[];
}

export const VideoDialog: FC<IVideoDialogProps> = ({ visibleResults }) => {
  return (
    <>
      {visibleResults.map((item) => (
        <Dialog key={item.id}>
          <DialogTrigger>
            <CardVideo title={item.title} urlImage={item.imageUrl} />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="items-center justify-center text-start">
              <DialogTitle className="my-6 flex w-80">
                <p className="line-clamp-3 p-1">
                  <span className="font-bold text-blue-400">Webinar: </span>
                  {item.title}
                </p>
              </DialogTitle>
              <div
                className="flex h-[12.4rem] w-full sm:h-[13.5rem] 
                  lg:h-[15.78rem]"
              >
                <YoutubePlayer videoId={item.videoUrl} />
              </div>
              <DialogDescription
                className="line-clamp-4 flex w-full flex-col px-2 
                  lg:px-4"
              >
                <span
                  className="border-b-2 pb-1 text-lg font-semibold 
                    text-gray-800"
                >
                  Descrição
                </span>
                {item.description}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="gap-2 px-2 text-gray-800 lg:px-4">
              <h5 className="border-b-2 pb-1 text-lg font-semibold">
                Donwloads
              </h5>
              <div
                className="mb-5 flex flex-wrap items-center justify-between 
                  gap-2"
              >
                <Button
                  colors="success"
                  className="h-7 w-36 justify-start border-0 p-0 pr-2
                    text-emerald-600/90"
                >
                  <span
                    className="flex h-full w-8 items-center justify-center 
                      rounded-l bg-emerald-300/60"
                  >
                    <DownloadCloud className="h-5 w-5" />
                  </span>

                  <span className="text-xs">Spreadsheet.xls</span>
                </Button>
                <Button
                  colors="info"
                  className="h-7 w-36 justify-start border-0 p-0 pr-2 
                  text-sky-600/90"
                >
                  <span
                    className="flex h-full w-8 items-center justify-center 
                      rounded-l bg-sky-300/60"
                  >
                    <DownloadCloud className="h-5 w-5" />
                  </span>

                  <span className="text-xs">Document.doc</span>
                </Button>
                <Button
                  colors="warning"
                  className="h-7 w-36 justify-start border-0 p-0 pr-2 
                  text-amber-600/90"
                >
                  <span
                    className="flex h-full w-8 items-center justify-center 
                      rounded-l bg-amber-300/60"
                  >
                    <DownloadCloud className="h-5 w-5" />
                  </span>

                  <span className="text-xs">Presetantion.ppt</span>
                </Button>
                <Button
                  colors="muted"
                  className="h-7 w-36 justify-start border-0 p-0 pr-2 
                    text-slate-600/90"
                >
                  <span
                    className="flex h-full w-8 items-center justify-center 
                      rounded-l bg-slate-300/60"
                  >
                    <DownloadCloud className="h-5 w-5" />
                  </span>

                  <span className="text-xs">Folder.zip</span>
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
};
