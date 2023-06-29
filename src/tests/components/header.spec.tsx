import { render, screen } from "@testing-library/react";

import { Header } from "@/components/header";

describe("Header component", () => {
  it("Should renders correctly", () => {
    render(<Header />);

    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
});
