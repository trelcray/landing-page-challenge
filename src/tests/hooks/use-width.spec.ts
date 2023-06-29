import { renderHook } from "@testing-library/react";

import { UseWidth } from "@/hooks/use-width";

describe("UseWidth", () => {
  it("Should update isMobile and isPortrait correctly when window width is within mobile range", () => {
    global.innerWidth = 360;
    const { result } = renderHook(() => UseWidth(639, 1023));
    expect(result.current.isMobile).toBe(true);
    expect(result.current.isPortrait).toBe(true);
  });

  it("Should update isMobile and isPortrait correctly when window width is within portrait tablet range", () => {
    global.innerWidth = 800;
    const { result } = renderHook(() => UseWidth(639, 1023));
    expect(result.current.isMobile).toBe(false);
    expect(result.current.isPortrait).toBe(true);
  });

  it("Should update isMobile and isPortrait correctly when window width is larger than portrait tablet range", () => {
    global.innerWidth = 1200;
    const { result } = renderHook(() => UseWidth(639, 1023));
    expect(result.current.isMobile).toBe(false);
    expect(result.current.isPortrait).toBe(false);
  });
});
