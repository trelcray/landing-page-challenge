import { render, fireEvent } from "@testing-library/react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

describe("dialog Component", () => {
  it("Shouldrenders the dialog when triggered", () => {
    const { getByText, queryByText } = render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogDescription>Dialog Description</DialogDescription>
          <DialogFooter>Dialog Footer</DialogFooter>
        </DialogContent>
      </Dialog>
    );

    expect(queryByText("Dialog Title")).not.toBeInTheDocument();

    fireEvent.click(getByText("Open Dialog"));

    expect(getByText("Dialog Title")).toBeInTheDocument();
    expect(getByText("Dialog Description")).toBeInTheDocument();
    expect(getByText("Dialog Footer")).toBeInTheDocument();

    fireEvent.click(getByText("Close"));

    expect(queryByText("Dialog Title")).not.toBeInTheDocument();
  });
});
