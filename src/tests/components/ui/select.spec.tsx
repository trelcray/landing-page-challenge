import { render } from "@testing-library/react";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

describe("Your Select Component", () => {
  test("renders the select component with options", () => {
    const { getByRole } = render(
      <Select>
        <SelectTrigger>Open Select</SelectTrigger>
        <SelectContent>
          <SelectItem value="testado">
            <p>teste</p>
          </SelectItem>
        </SelectContent>
      </Select>
    );

    expect(getByRole("combobox")).toBeInTheDocument();
  });
});
