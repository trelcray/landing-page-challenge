import { render, screen } from "@testing-library/react";

import { Banner } from "@/components/banner";

describe("Banner component", () => {
  it("Should renders correctly", () => {
    render(<Banner />);

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toBeInTheDocument();
  });
});
