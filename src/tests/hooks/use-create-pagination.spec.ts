import { renderHook, act } from "@testing-library/react";

import { UseCreatePagination } from "@/hooks/use-create-pagination";

describe("the use create pagination hook", () => {
  it("Should change the page corretly", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const rowsPerPage = 3;

    const { result } = renderHook(() => UseCreatePagination(data, rowsPerPage));

    expect(result.current.currentPage).toBe(1);
    expect(result.current.visibleResults).toEqual([1, 2, 3]);

    act(() => {
      result.current.handleChangePage(2);
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.visibleResults).toEqual([4, 5, 6]);

    act(() => {
      result.current.handleChangePage(1);
      result.current.handleChangePage(2);
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.visibleResults).toEqual([4, 5, 6]);
  });

  it.only("Should display sequential page links closest to the current page", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const rowsPerPage = 1;

    const { result } = renderHook(() => UseCreatePagination(data, rowsPerPage));

    act(() => {
      result.current.handleChangePage(1);
    });

    expect(result.current.pageLinks).toEqual([1, 2, 3, 4, 5]);

    act(() => {
      result.current.handleChangePage(5);
    });

    expect(result.current.pageLinks).toEqual([3, 4, 5, 6, 7]);

    act(() => {
      result.current.handleChangePage(10);
    });

    expect(result.current.pageLinks).toEqual([6, 7, 8, 9, 10]);

    act(() => {
      result.current.handleChangePage(11);
    });

    expect(result.current.currentPage).toBe(10);
  });
});
