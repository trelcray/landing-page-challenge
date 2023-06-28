"use client";

import { useEffect, useMemo, useState } from "react";

export const UseCreatePagination = <T>(data: T[], rowsPerPage: number) => {
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  let pageLinks: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageLinks.push(i);
  }

  if (totalPages > 5) {
    // Caso haja mais de 5 páginas, exiba os links de página sequenciais mais próximos da página atual
    if (currentPage - 2 > 1 && currentPage + 2 <= totalPages) {
      // Exibe os links de página sequenciais mais próximos da página atual se a página atual for suficientemente longe do início e do fim
      pageLinks = [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];
    } else if (currentPage - 2 <= 1) {
      // Exibe os primeiros 5 links de página se a página atual estiver perto do início
      pageLinks = [1, 2, 3, 4, 5];
    } else if (currentPage + 2 > totalPages) {
      // Exibe os últimos 5 links de página se a página atual estiver perto do fim
      pageLinks = [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
  }

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  // Filtra os dados da tabela com base no número da página atual e no limite de linhas por página
  const startIndex = useMemo(
    () => (currentPage - 1) * rowsPerPage,
    [currentPage, rowsPerPage]
  );
  const endIndex = useMemo(
    () => (rowsPerPage === -1 ? data.length : startIndex + rowsPerPage),
    [data, rowsPerPage, startIndex]
  );

  const visibleResults = useMemo(() => {
    return data.slice(startIndex, endIndex);
  }, [data, startIndex, endIndex]);

  useEffect(() => {
    // Atualiza o totalPages com base na quantidade de linhas da tabela e no limite de linhas por página
    const totalPages =
      rowsPerPage === -1 ? 1 : Math.ceil(data.length / rowsPerPage);

    // Verifica se a página atual é maior que o total de páginas e ajusta para a última página disponível
    let updatedCurrentPage = currentPage;
    if (updatedCurrentPage > totalPages) {
      updatedCurrentPage = totalPages;
    }

    setTotalPages(totalPages);
    setCurrentPage(updatedCurrentPage);
  }, [data, rowsPerPage, currentPage]);

  return { handleChangePage, pageLinks, currentPage, visibleResults };
};
