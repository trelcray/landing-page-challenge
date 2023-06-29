import { FC } from "react";

import { FacebookIcon, Instagram, LinkedinIcon } from "lucide-react";
import Image from "next/image";

import Logo from "@/assets/logo.svg";

import { Button } from "./ui/button";

export const Footer: FC = ({}) => {
  return (
    <footer
      className="flex h-full w-full flex-col items-center justify-center
      gap-8 px-2 pb-4 pt-8 text-center text-gray-500 sm:text-start"
    >
      <div className="flex flex-col items-center justify-center">
        <Image height={210} width={210} src={Logo} alt="logo" priority />
        <p className="text-xs">Transformando visitantes em clientes.</p>
      </div>

      <div
        className="flex h-full w-full flex-wrap items-start justify-evenly 
        gap-4"
      >
        <div
          className="flex flex-col items-center gap-4 text-xs font-light 
          sm:items-start sm:text-sm"
        >
          <h5 className="mb-2 text-base font-semibold text-gray-800">
            Links Principais
          </h5>
          <span className="cursor-pointer hover:text-blue-400">Home</span>
          <span className="cursor-pointer hover:text-blue-400">Ferramenta</span>
          <span className="cursor-pointer hover:text-blue-400">Preços</span>
          <span className="cursor-pointer hover:text-blue-400">Contato</span>
        </div>
        <div
          className="flex flex-col items-center gap-4 text-xs font-light 
          sm:items-start sm:text-sm"
        >
          <h5 className="mb-2 text-base font-semibold text-gray-800">Cases</h5>
          <span className="cursor-pointer hover:text-blue-400">
            Geração de Leads B2B
          </span>
          <span className="cursor-pointer hover:text-blue-400">
            Geração de Leads em Software
          </span>
          <span className="cursor-pointer hover:text-blue-400">
            Geração de Leads em Imobiliária
          </span>
          <span className="cursor-pointer hover:text-blue-400">
            Cases de Sucesso
          </span>
        </div>
        <div
          className="flex flex-col items-center gap-4 text-xs font-light 
          sm:items-start sm:text-sm"
        >
          <h5 className="mb-2 text-base font-semibold text-gray-800">
            Materiais
          </h5>
          <span className="cursor-pointer hover:text-blue-400">Blog</span>
          <span className="cursor-pointer hover:text-blue-400">
            Parceria em Agências
          </span>
          <span className="cursor-pointer hover:text-blue-400">
            Guia Definitivo do Marketing
          </span>
          <span className="cursor-pointer hover:text-blue-400">
            Materias Gratuitos
          </span>
        </div>
        <div
          className="flex flex-col gap-4 text-xs font-light text-gray-800 
          sm:text-sm"
        >
          <h5 className="mb-2 text-base font-semibold">Siga a Leadster</h5>
          <span className="flex items-center justify-around">
            <Button radius="full" colors="muted" className="p-2">
              <LinkedinIcon className="h-4 w-4 fill-gray-500 text-gray-500" />
            </Button>
            <Button radius="full" colors="muted" className="p-2">
              <FacebookIcon className="h-4 w-4 fill-gray-500 text-gray-500" />
            </Button>
            <Button radius="full" colors="muted" className="p-2">
              <Instagram className="h-4 w-4 font-bold text-gray-500" />
            </Button>
          </span>
          <div className="mt-4 flex flex-col gap-2">
            <span>
              <strong className="text-gray-800">E-mail: </strong>{" "}
              <br className="sm:hidden" />
              contato@leadster.com.br
            </span>
            <span>
              <strong className="text-gray-800">Telefone: </strong>{" "}
              <br className="sm:hidden" /> (42) 98828-9851
            </span>
          </div>
        </div>
      </div>
      <span className="mt-6 w-full border" />
      <div className="flex w-full justify-around gap-2 text-xs">
        <p>
          Copyright © 2015 - 2022 Todos os direitos reservados | {""}
          <span className="text-blue-400">Leadster</span>
        </p>
        <address>
          Rua José Loureiro, 464 - centro - Curitiba PR - CEP 80010-000 | Termos
          de uso
        </address>
      </div>
    </footer>
  );
};
