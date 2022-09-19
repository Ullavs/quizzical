import React from "react";
import { fireEvent, render } from "@testing-library/react";
import WelcomePage from ".";
import { MemoryRouter } from "react-router-dom";

describe("Welcome page", () => {
  it("will show the question and answers", () => {
    const { getByText } = render(
      <MemoryRouter>
        <WelcomePage />
      </MemoryRouter>
    );

    expect(getByText("The most fun quiz ever")).toBeTruthy();
    expect(getByText("Start Quiz").href.endsWith("/quiz")).toBe(true);
  });
});
