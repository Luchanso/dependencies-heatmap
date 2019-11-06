import React from "react";
import { mount } from "enzyme";
import { DependenciesTable } from "../DependenciesTable";

test("should be render table", () => {
  const wrapper = mount(<DependenciesTable />);

  expect(wrapper.find('tr').exists()).toBe(true);
  expect(wrapper.find('td').exists()).toBe(true);
});
