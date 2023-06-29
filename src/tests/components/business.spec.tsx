import { render, screen } from "@testing-library/react";

import { Business } from "@/components/business";

describe("Business component", () => {
  it("Should renders correctly", () => {
    render(<Business />);

    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h2).toBeInTheDocument();
  });
});
