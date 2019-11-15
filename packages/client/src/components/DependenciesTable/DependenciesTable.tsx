import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { AddSourceButton } from "../AddSourceButton/AddSourceButton";
import { SkeletonTable } from "./SkeletonTable";
import { RootPaper, StyledTableHead } from "./styled";
import { useDependenciesMapTable } from "./useDependenciesMap";

export const DependenciesTable = () => {
  const projects = [
    "https://github.com/Luchanso/dota-ai-pick.git",
    "https://github.com/Luchanso/invest-calculator.git",
    "https://github.com/alfa-laboratory/thrift-api-ui"
  ];
  const libs = ["react", 'react-dom', 'arui-scripts', 'eslint', 'typescript'];
  const { loading, error, columns, headers } = useDependenciesMapTable(
    projects,
    libs
  );

  if (loading) {
    return <SkeletonTable />;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  if (!columns || !headers) {
    return <span>Unknown data</span>;
  }

  console.log(libs, columns, headers);

  return (
    <RootPaper>
      <Table size="small" stickyHeader>
        <StyledTableHead>
          <TableRow>
            <TableCell>
              <AddSourceButton />
            </TableCell>
            {headers.map(name => (
              <TableCell align="right" key={name}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {libs.map((libName: string, rowNumber: number) => (
            <TableRow hover key={libName}>
              <TableCell>{libName}</TableCell>
              {columns.map(columnItem => (
                <TableCell align="right">{columnItem[rowNumber]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </RootPaper>
  );
};
