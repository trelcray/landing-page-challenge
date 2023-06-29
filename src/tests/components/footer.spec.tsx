import { render, screen } from "@testing-library/react";

import { Footer } from "@/components/footer";

describe("Footer component", () => {
  it("Should renders correctly", () => {
    render(<Footer />);

    const address = screen.getByText(
      "Rua José Loureiro, 464 - centro - Curitiba PR - CEP 80010-000 | Termos de uso"
    );
    expect(address).toBeInTheDocument();
  });
});
