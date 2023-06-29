import { render } from "@testing-library/react";

import { VideoDialog } from "@/components/video-dialog";

describe("VideoDialog Component", () => {
  test("renders the video dialog component with data", () => {
    const visibleResults = [
      {
        id: 1,
        link: "https://www.youtube.com/watch?v=lx0eir2xF5E",
        urlImage: "/thumbnail.png",
        title: "Video 1",
        description: "Description 1",
        category: "Category 1",
        publicationDate: "2023-06-28",
      },
      {
        id: 2,
        link: "https://www.youtube.com/watch?v=lx0eir2xF5E",
        urlImage: "/thumbnail.png",
        title: "Video 2",
        description: "Description 2",
        category: "Category 2",
        publicationDate: "2023-06-29",
      },
    ];

    const { getByText } = render(
      <VideoDialog visibleResults={visibleResults} />
    );

    expect(getByText("Video 1")).toBeInTheDocument();
    expect(getByText("Video 2")).toBeInTheDocument();
  });
});
