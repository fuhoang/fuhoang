import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Container } from "../Container";

describe("Container", () => {
  it("renders children content", () => {
    render(
      <Container>
        <span>child content</span>
      </Container>,
    );

    expect(screen.getByText("child content")).toBeInTheDocument();
  });
});
