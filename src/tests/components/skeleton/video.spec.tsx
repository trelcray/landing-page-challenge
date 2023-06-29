import { render, screen } from "@testing-library/react";

import { Video } from "@/components/skeleton/video";

describe("Video skeleton component", () => {
  it("Should renders correctly", () => {
    render(<Video />);

    const icon = screen.getByLabelText("loading");
    expect(icon).toBeInTheDocument();
  });
});
