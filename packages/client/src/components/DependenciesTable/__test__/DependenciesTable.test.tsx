import React from "react";
import { MemoryRouter } from 'react-router';
import { mount } from "enzyme";
import { MockedProvider, MockedResponse } from "@apollo/react-testing";
import { DependenciesTable } from "../DependenciesTable";
import { query } from "../useDependenciesMap";

const mocks: MockedResponse[] = [
  {
    request: {
      query,
      variables: {
        projects: [
          "https://github.com/Luchanso/dota-ai-pick.git",
          "https://github.com/Luchanso/invest-calculator.git",
          "https://github.com/alfa-laboratory/thrift-api-ui"
        ],
        libs: ["react", "react-dom", "arui-scripts", "eslint", "typescript"]
      }
    },
    result: {
      data: {
        dependenciesMap: [
          {
            gitUrl: "https://github.com/Luchanso/dota-ai-pick.git",
            dependencies: [
              {
                name: "react",
                version: "16.10.2"
              },
              {
                name: "react-dom",
                version: "16.10.2"
              },
              {
                name: "typescript",
                version: "3.6.4"
              }
            ]
          },
          {
            gitUrl: "https://github.com/Luchanso/invest-calculator.git",
            dependencies: [
              {
                name: "react",
                version: "16.10.2"
              },
              {
                name: "react-dom",
                version: "16.10.2"
              }
            ]
          },
          {
            gitUrl: "https://github.com/alfa-laboratory/thrift-api-ui",
            dependencies: [
              {
                name: "react",
                version: "^16.8.6"
              },
              {
                name: "react-dom",
                version: "^16.8.6"
              },
              {
                name: "typescript",
                version: "^3.4.5"
              }
            ]
          }
        ]
      }
    }
  }
];

test("should be render table", () => {
  const wrapper = mount(
    <MemoryRouter>
      <MockedProvider addTypename={false} mocks={mocks}>
        <DependenciesTable />
      </MockedProvider>
    </MemoryRouter>
  );

  expect(wrapper.find("tr").exists()).toBe(true);
  expect(wrapper.find("td").exists()).toBe(true);
});
