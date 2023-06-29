import { render, screen } from "@testing-library/react";

import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("Should display loader on start when isLoading is true and loaderPosition is 'start'", () => {
    render(
      <Button isLoading={true} loaderPosition="start">
        Submit
      </Button>
    );

    const loader = screen.getByLabelText("loader start");
    expect(loader).toBeInTheDocument();
  });

  it("Should display loader at end when isLoading is true and loaderPosition is 'end'", () => {
    render(
      <Button isLoading={true} loaderPosition="end">
        Submit
      </Button>
    );

    const loader = screen.getByLabelText("loader end");
    expect(loader).toBeInTheDocument();
  });

  it("Should display loader when isLoading is true", () => {
    render(<Button isLoading={true}>Submit</Button>);

    const loader = screen.getByLabelText("loader full");
    expect(loader).toBeInTheDocument();
  });

  it("Should not display loader when isLoading is false", () => {
    render(<Button isLoading={false}>Submit</Button>);

    const loader = screen.queryByLabelText("loader full");
    expect(loader).not.toBeInTheDocument();
  });
});
