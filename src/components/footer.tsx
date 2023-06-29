import { FC, FunctionComponent } from "react";

import { LucideProps } from "lucide-react";
import Image from "next/image";

import Logo from "@/assets/logo.svg";
import { Contact, Links } from "@/mocks/info";

import { Button } from "./ui/button";

interface IIconsProps extends LucideProps {
  icon: FunctionComponent;
}

export const Footer: FC = ({}) => {
  function Icons({ icon, ...props }: IIconsProps) {
    const Icon = icon;
    return <Icon {...props} />;
  }
  return (
    <footer
      className="flex h-full w-full flex-col items-center justify-center
      gap-8 px-2 pb-4 pt-8 text-center text-gray-800 sm:text-start"
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          height={210}
          width={210}
          src={Logo}
          className="h-auto w-auto"
          alt="logo"
          priority
        />
        <p className="text-xs">Transformando visitantes em clientes.</p>
      </div>

      <div
        className="flex h-full w-full flex-wrap items-start justify-evenly 
        gap-4"
      >
        {Links.map((data, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 text-xs font-light 
            sm:items-start sm:text-sm"
          >
            <h1 className="mb-2 text-base font-semibold text-gray-800">
              {data.group.title}
            </h1>
            {data.group.links.map((link, i) => (
              <span key={i} className="cursor-pointer hover:text-blue-500">
                {link.name}
              </span>
            ))}
          </div>
        ))}

        <div
          className="flex flex-col gap-4 text-xs font-light text-gray-800 
          sm:text-sm"
        >
          <h1 className="mb-2 text-base font-semibold">{Contact.title}</h1>
          <span className="flex items-center justify-around">
            {Contact.socials.map((data, i) => (
              <a
                aria-label="link to contact"
                key={i}
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  aria-label="button contact"
                  radius="full"
                  colors="muted"
                  className="p-2"
                >
                  <Icons
                    icon={data.iconName}
                    className={`h-4 w-4 ${
                      i === Contact.socials.length - 1
                        ? "fill-transparent text-gray-500"
                        : "fill-gray-500 text-gray-500"
                    }`}
                  />
                </Button>
              </a>
            ))}
          </span>

          <div className="mt-4 flex flex-col gap-2">
            {Contact.contacts.map((data, i) => (
              <span key={i}>
                <strong className="text-gray-800">{data.name}: </strong>{" "}
                <br className="sm:hidden" />
                {data.href}
              </span>
            ))}
          </div>
        </div>
      </div>

      <span className="mt-6 w-full border" />
      <div className="flex w-full justify-around gap-2 text-xs">
        <p>
          Copyright © 2015 - 2022 Todos os direitos reservados | {""}
          <span className="text-blue-500">Leadster</span>
        </p>
        <address>
          Rua José Loureiro, 464 - centro - Curitiba PR - CEP 80010-000 | Termos
          de uso
        </address>
      </div>
    </footer>
  );
};
