import { mount } from "enzyme";
import React from "react";
import { AddSourceButton } from "../AddSourceButton";

test("should be cliked on button", () => {
  const handleClick = jest.fn();
  const wrapper = mount(<AddSourceButton onClick={handleClick} />);

  wrapper.find("button").simulate("click");

  expect(handleClick.call.length).toBe(1);
});
