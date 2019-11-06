import { useQuery } from "@apollo/react-hooks";
import { TableBody, TableCell, TableRow, Table } from "@material-ui/core";
import { loader } from "graphql.macro";
import React from "react";
import { RootPaper, StyledTableHead } from "./styled";
import {
  toTableBody,
  toTableHead
} from "../../utils/project-parser/projects-parser";
import { AddSourceButton } from "../AddSourceButton/AddSourceButton";
import { tempData } from "./TempData";
import { SkeletonTable } from "./SkeletonTable";

const example = [toTableHead(tempData), toTableBody(tempData)] as const;
const query = loader("./dependenciesMap.gql");

export const DependenciesTable = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) {
    return <SkeletonTable />;
  }

  if (error) {
    return <span>{error.message}</span>;
  }

  const allDependencies = data.dependenciesMap.reduce(
    (result: string[], project: any) => [...result, ...project.dependencies],
    []
  );
  const allProjectsNames = data.dependenciesMap.map(
    (project: any) => project.gitUrl
  );
  const rows = allDependencies.map((dependency: any) => [
    dependency.name,
    ...data.dependenciesMap.map(
      (project: any) =>
        project.dependencies.find(({ name }: any) => name === dependency.name)
          .version
    )
  ]);

  console.log(rows);

  return (
    <RootPaper>
      <Table size="small" stickyHeader>
        <StyledTableHead>
          <TableRow>
            <TableCell>
              <AddSourceButton />
            </TableCell>
            {allProjectsNames.map((name: any) => (
              <TableCell align="right" key={name}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow hover>
              {row.map(
                (item: any, index: number) =>
                  (index === 0 && <TableCell>{item} </TableCell>) || (
                    <TableCell align="right">{item}</TableCell>
                  )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </RootPaper>
  );
};
