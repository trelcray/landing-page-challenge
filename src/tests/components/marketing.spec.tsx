import { render, screen } from "@testing-library/react";

import { Marketing } from "@/components/marketing";

describe("Banner component", () => {
  it("Should renders correctly", () => {
    render(<Marketing />);

    const button = screen.getByRole("button", { name: "Agências" });
    expect(button).toBeInTheDocument();
  });
});
