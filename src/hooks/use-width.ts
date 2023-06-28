"use client";

import { useEffect, useState } from "react";

export const UseWidth = (width: number, widthPortrait: number) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= width);
      setIsPortrait(screenWidth <= widthPortrait);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, widthPortrait]);

  return { isMobile, isPortrait };
};
