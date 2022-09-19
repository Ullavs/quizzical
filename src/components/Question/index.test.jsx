import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Question from ".";

describe("Question", () => {
  const sharedProps = {
    question: "Which option is correct?",
    incorrectOptions: ["optionA", "optionB", "optionD"],
    correctOption: "optionC",
    pickedAnswer: undefined,
    pickAnswer: () => null,
    disabled: false,
  };

  it("will show the question and answers", () => {
    const { getByText } = render(<Question {...sharedProps} />);

    expect(getByText("Which option is correct?")).toBeTruthy();
    expect(getByText("optionA")).toBeTruthy();
    expect(getByText("optionB")).toBeTruthy();
    expect(getByText("optionC")).toBeTruthy();
    expect(getByText("optionD")).toBeTruthy();
  });

  it("is possible to pick an answer", () => {
    const pickAnswer = jest.fn((option) => console.log(option));
    const props = {
      ...sharedProps,
      pickAnswer,
    };

    const { getByText } = render(<Question {...props} />);

    const optionC = getByText("optionC");

    fireEvent.click(optionC);

    expect(pickAnswer).toHaveBeenCalledTimes(1);
    expect(pickAnswer).toHaveBeenCalledWith("optionC");
  });

  it("will show the question as picked", () => {
    const props = {
      ...sharedProps,
      pickedAnswer: "optionB",
    };

    const { getByText } = render(<Question {...props} />);

    expect(getByText("optionB").classList.contains("picked")).toBe(true);
  });

  it("will show the correct option", () => {
    const props = {
      ...sharedProps,
      pickedAnswer: "optionB",
      disabled: true,
    };

    const { getByText } = render(<Question {...props} />);

    expect(getByText("optionB").classList.contains("wrong")).toBe(true);
    expect(getByText("optionB").classList.contains("correct")).toBe(false);
    expect(getByText("optionC").classList.contains("wrong")).toBe(false);
    expect(getByText("optionC").classList.contains("correct")).toBe(true);
  });
});
