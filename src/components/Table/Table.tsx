import React from "react";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const RootLayout = styled.div`
  margin: 64px;
`;

export const Table = () => (
  <RootLayout>
    <Paper>
      <MaterialTable size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Button variant="contained" color="primary">
                Add source
              </Button>
            </TableCell>
            <TableCell align="right">corp-dash</TableCell>
            <TableCell align="right">corp-payment</TableCell>
            <TableCell align="right">corp-paylist</TableCell>
            <TableCell align="right">corp-list</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>arui-scripts</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>arui-feather</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>arui-private</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>react</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
            <TableCell align="right">{getRandomVersion()}</TableCell>
          </TableRow>
        </TableBody>
      </MaterialTable>
    </Paper>
  </RootLayout>
);
