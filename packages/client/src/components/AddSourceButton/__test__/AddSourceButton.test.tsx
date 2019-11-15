import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from 'react-router';
import { AddSourceButton } from "../AddSourceButton";

test("should be cliked on button", () => {
  const handleClick = jest.fn();
  const wrapper = mount(
    <MemoryRouter>
      <AddSourceButton />
    </MemoryRouter>
  );

  wrapper.find("button").simulate("click");

  expect(handleClick.call.length).toBe(1);
});
