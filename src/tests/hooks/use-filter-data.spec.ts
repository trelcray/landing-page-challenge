import { UseFilterData } from "@/hooks/use-filter-data";

describe("use filter data hook", () => {
  it("Should return data filtered and sorted correctly by date", () => {
    const data = [
      {
        category: "Agências",
        publishedAt: "2021-12-31",
        title: "Título B",
      },
      {
        category: "Agências",
        publishedAt: "2022-01-01",
        title: "Título A",
      },
      {
        category: "Agências",
        publishedAt: "2022-02-01",
        title: "Título C",
      },
    ];

    const isActive = "Agências";
    const selectValue = "date";

    const { filteredData } = UseFilterData(data, isActive, selectValue);

    expect(filteredData).toEqual(data);
  });

  it("Should return data filtered and sorted correctly by title", () => {
    const data = [
      {
        category: "Marketing Digital",
        publishedAt: "2022-01-01",
        title: "Título C",
      },
      {
        category: "Marketing Digital",
        publishedAt: "2021-12-31",
        title: "Título A",
      },
      {
        category: "Marketing Digital",
        publishedAt: "2022-02-01",
        title: "Título B",
      },
    ];

    const isActive = "Marketing Digital";
    const selectValue = "title";

    const { filteredData } = UseFilterData(data, isActive, selectValue);

    expect(filteredData).toEqual([
      {
        category: "Marketing Digital",
        publishedAt: "2021-12-31",
        title: "Título A",
      },
      {
        category: "Marketing Digital",
        publishedAt: "2022-02-01",
        title: "Título B",
      },
      {
        category: "Marketing Digital",
        publishedAt: "2022-01-01",
        title: "Título C",
      },
    ]);
  });

  it("Should return the sorted data as verified by the numerical values contained in the headings", () => {
    const data = [
      {
        category: "Marketing Digital",
        publishedAt: "2022-01-01",
        title: "Título 2",
      },
      {
        category: "Marketing Digital",
        publishedAt: "2021-12-31",
        title: "Título 3",
      },
      {
        category: "Marketing Digital",
        publishedAt: "2022-02-01",
        title: "Título 1",
      },
    ];

    const isActive = "Marketing Digital";
    const selectValue = "title";

    const { filteredData } = UseFilterData(data, isActive, selectValue);

    expect(filteredData).toEqual([
      {
        category: "Marketing Digital",
        publishedAt: "2022-02-01",
        title: "Título 1",
      },
      {
        category: "Marketing Digital",
        publishedAt: "2022-01-01",
        title: "Título 2",
      },
      {
        category: "Marketing Digital",
        publishedAt: "2021-12-31",
        title: "Título 3",
      },
    ]);
  });

  it("Should return an empty array when there is no data", () => {
    const data: {
      category: string;
      publishedAt: string;
      title: string;
    }[] = [];
    const isActive = "Agências";
    const selectValue = "date";

    const { filteredData } = UseFilterData(data, isActive, selectValue);

    expect(filteredData).toEqual([]);
  });
});
