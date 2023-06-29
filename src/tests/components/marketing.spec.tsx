import { fireEvent, render, screen } from "@testing-library/react";

import { Marketing } from "@/components/marketing";

describe("Banner component", () => {
  it("Should renders correctly", () => {
    render(<Marketing />);

    const button = screen.getByRole("button", { name: "Agências" });
    expect(button).toBeInTheDocument();
  });

  it("Should update isActive state when a category button is clicked", () => {
    const { getByText } = render(<Marketing />);
    const categoryButton = getByText("Agências");

    expect(categoryButton).toBeInTheDocument();

    fireEvent.click(categoryButton);

    expect(categoryButton).toHaveClass("border-blue-400");
    expect(categoryButton).toHaveClass("bg-blue-400");
    expect(categoryButton).toHaveClass("text-white");

    fireEvent.click(categoryButton);

    expect(categoryButton).not.toHaveClass("border-blue-400");
    expect(categoryButton).not.toHaveClass("bg-blue-400");
    expect(categoryButton).not.toHaveClass("text-white");
  });
});
