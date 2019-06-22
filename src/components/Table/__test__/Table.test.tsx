import React from "react";
import { mount } from "enzyme";
import { Table } from "../Table";

test("should be render table", () => {
  const wrapper = mount(<Table />);

  expect(wrapper.find('tr').exists()).toBe(true);
  expect(wrapper.find('td').exists()).toBe(true);
});
