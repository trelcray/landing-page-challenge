"use client";

import { useEffect, useState } from "react";

import { usePagination } from "@mantine/hooks";

export const UseCreatePagination = <T>(data: T[], value: number) => {
  const [visibleResults, setVisibleResults] = useState(data?.slice(0, value));

  const ITEMS_PER_PAGE = value;
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const pagination = usePagination({
    total: totalPages,
    initialPage: 1,
    onChange(page) {
      const start = (page - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      setVisibleResults(data?.slice(start, end));
    },
  });

  useEffect(() => {
    const start = (pagination.active - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    setVisibleResults(data.slice(start, end));
  }, [data, ITEMS_PER_PAGE, pagination.active]);

  return { pagination, visibleResults, totalPages, setVisibleResults };
};
