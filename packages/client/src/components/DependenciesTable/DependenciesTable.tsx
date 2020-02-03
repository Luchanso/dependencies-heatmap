import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { AddSourceButton } from "../AddSourceButton/AddSourceButton";
import { SkeletonTable } from "./SkeletonTable";
import { RootPaper, StyledTableHead } from "./styled";
import { useDependenciesMapTable } from "./useDependenciesMap";
import { Filter } from "../Filter/Filter";

export const DependenciesTable = () => {
  const {
    loading,
    error,
    columns,
    headers,
    firstColumn
  } = useDependenciesMapTable();

  if (loading) {
    return <SkeletonTable />;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  if (!columns || !headers || !firstColumn) {
    return <span>Unknown data</span>;
  }

  return (
    <RootPaper>
      <Filter />
      <Table size="small" stickyHeader>
        <StyledTableHead>
          <TableRow>
            <TableCell>
              <AddSourceButton />
            </TableCell>
            {headers.map((name, headerNumber) => (
              <TableCell align="right" key={name + headerNumber.toString()}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {firstColumn.map((libName: string, rowNumber: number) => (
            <TableRow hover key={libName}>
              <TableCell>{libName}</TableCell>
              {columns.map((columnItem, columnNumber) => (
                <TableCell
                  align="right"
                  key={libName + columnNumber.toString()}
                >
                  {columnItem[rowNumber]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </RootPaper>
  );
};
