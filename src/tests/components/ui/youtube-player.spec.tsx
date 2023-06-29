import { render, screen } from "@testing-library/react";

import { YoutubePlayer } from "@/components/ui/youtube-player";

describe("Business component", () => {
  it("Should renders correctly", () => {
    const videoId =
      "https://www.youtube.com/watch?v=YgYx8Y6Vbck&list=PLC3y8-rFHvwirqe1KHFCHJ0RqNuN61SJd&index=28";
    render(<YoutubePlayer videoId={videoId} />);

    const h2 = screen.getByLabelText("youtube");
    expect(h2).toBeInTheDocument();
  });
});
