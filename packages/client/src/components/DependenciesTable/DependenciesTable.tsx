import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { AddSourceButton } from "../AddSourceButton/AddSourceButton";
import { Filter } from "../Filter/Filter";
import { EmptyState } from "./EmptyState";
import { SkeletonTable } from "./SkeletonTable";
import { RootPaper, StyledTableHead } from "./styled";
import { useDependenciesMapTable } from "./useDependenciesMap";

export const DependenciesTable = () => {
  const {
    loading,
    error,
    columns,
    headers,
    firstColumn,
    isEmpty
  } = useDependenciesMapTable();

  if (loading) {
    return <SkeletonTable />;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  if (isEmpty || !headers || !columns || !firstColumn) {
    return <EmptyState />;
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
