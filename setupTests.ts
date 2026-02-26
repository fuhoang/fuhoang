import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import React from "react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});

vi.mock("framer-motion", () => {
  return {
    motion: {
      div: (props: React.ComponentProps<"div"> & { children: React.ReactNode }) => {
        const domProps = { ...props } as Record<string, unknown>;
        delete domProps.initial;
        delete domProps.whileInView;
        delete domProps.viewport;
        delete domProps.transition;
        return React.createElement("div", domProps, props.children);
      },
    },
    useReducedMotion: () => true,
  };
});
