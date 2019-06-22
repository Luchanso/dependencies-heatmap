import { Projects } from "../projects-parser";

export const projects: Projects = {
  "corp-dash-ui": {
    dep1: "1.0.0",
    dep2: "2.0.0",
    dep3: "3.0.0"
  },
  "corp-payment-ui": {
    dep1: "1.1.0",
    dep3: "3.0.0"
  },
  "corp-stub": {
    dep1: "1.0.0",
    dep2: "2.0.3"
  }
};

export const tableHead = ["corp-dash-ui", "corp-payment-ui", "corp-stub"];
export const tableBody = [
  ["dep1", "1.0.0", "1.1.0", "1.0.0"],
  ["dep2", "2.0.0", "-", "2.0.3"],
  ["dep3", "3.0.0", "3.0.0", "-"]
];
