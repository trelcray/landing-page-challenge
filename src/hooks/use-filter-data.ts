export const UseFilterData = <
  T extends { category: string; publicationDate: string; title: string }
>(
  data: T[],
  isActive: string,
  selectValue: string
) => {
  const filteredData =
    data.length > 0
      ? data
          .filter((item) => item.category.includes(isActive))
          .sort((a, b) => {
            let sortResult = 0;

            if (selectValue === "date") {
              const dateA = new Date(a.publicationDate);
              const dateB = new Date(b.publicationDate);
              sortResult = dateA.getTime() - dateB.getTime();
            } else if (selectValue === "title") {
              const titleA = a.title.toUpperCase();
              const titleB = b.title.toUpperCase();
              const regex = /(\D+)(\d*)$/;
              const matchA = titleA.match(regex);
              const matchB = titleB.match(regex);

              if (matchA && matchB) {
                const [, alphabeticA, numericA] = matchA;
                const [, alphabeticB, numericB] = matchB;

                if (alphabeticA < alphabeticB) {
                  sortResult = -1;
                } else if (alphabeticA > alphabeticB) {
                  sortResult = 1;
                } else {
                  const numericValueA = parseInt(numericA);
                  const numericValueB = parseInt(numericB);

                  if (numericValueA < numericValueB) {
                    sortResult = -1;
                  } else if (numericValueA > numericValueB) {
                    sortResult = 1;
                  }
                }
              }
            }

            return sortResult;
          })
      : [];

  return { filteredData };
};
