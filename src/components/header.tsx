import { FC } from "react";

import Image from "next/image";

import Logo from "@/assets/logo.svg";

export const Header: FC = ({}) => {
  return (
    <header className="flex flex-1 items-center justify-center py-4">
      <Image height={30} src={Logo} alt="logo" />
    </header>
  );
};
