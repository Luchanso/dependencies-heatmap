import { toTableHead, toTableBody } from "../projects-parser";
import { projects, tableHead, tableBody } from "./fixtures";

test('should return table head', () => {
    expect(toTableHead(projects)).toEqual(tableHead);
});

test('shoul return table body', () => {
    const body = toTableBody(projects);

    expect(body).toEqual(tableBody);
});