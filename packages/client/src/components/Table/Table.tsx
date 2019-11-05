import { useQuery } from "@apollo/react-hooks";
import Paper from "@material-ui/core/Paper";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { loader } from "graphql.macro";
import React from "react";
import styled from "styled-components";
import { toTableBody, toTableHead } from "../../utils/project-parser/projects-parser";
import { AddSourceButton } from "../AddSourceButton/AddSourceButton";
import { tempData } from "./TempData";

const RootLayout = styled.div`
  margin: 64px;
`;

const example = [toTableHead(tempData), toTableBody(tempData)] as const;
const query = loader('./getDependenciesMapFromGit.gql');

export const Table = () => {
  const { loading, error, data } = useQuery(query);
  console.log(data);

  if (loading) {
    return <React.Fragment>loading</React.Fragment>;
  }
  if (error) {
    return <React.Fragment>{error.message.toString()}</React.Fragment>
  }
  if (data) {
    return (
      <Paper style={{ padding: '8px 16px', marginBottom: 24 }}>
        <pre>data: { data && JSON.stringify(data, null, 4) }</pre>
      </Paper>
    )
  }

  return (
    <RootLayout>
      <Paper>
        <MaterialTable size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <AddSourceButton onClick={() => {}} />
              </TableCell>
              {example[0].map(project => (
                <TableCell align="right" key={project}>
                  {project}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {example[1].map(row => (
              <TableRow key={row[0]} hover>
                <TableCell>{row[0]}</TableCell>
                {row.map(
                  (ver, index) =>
                    index !== 0 && (
                      <TableCell align="right" key={index + ver}>
                        {ver}
                      </TableCell>
                    )
                )}
              </TableRow>
            ))}
          </TableBody>
        </MaterialTable>
      </Paper>
    </RootLayout>
  );
};
