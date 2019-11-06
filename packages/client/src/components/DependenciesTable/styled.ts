import styled from "styled-components";
import { TableHead, Paper } from "@material-ui/core";

export const RootPaper = styled(Paper)`
  display: flex;
  overflow-x: scroll;
  overflow-y: scroll;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const StyledTableHead = styled(TableHead)`
  white-space: nowrap;
`;
