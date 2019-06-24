import React from "react";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { tempData } from "./TempData";
import {
  toTableBody,
  toTableHead
} from "../../utils/project-parser/projects-parser";
import { AddSourceButton } from "../AddSourceButton/AddSourceButton";

const RootLayout = styled.div`
  margin: 64px;
`;

const example = [toTableHead(tempData), toTableBody(tempData)] as const;

export const Table = () => (
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
                  index !== 0 && <TableCell align="right" key={index + ver}>{ver}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </Paper>
  </RootLayout>
);
