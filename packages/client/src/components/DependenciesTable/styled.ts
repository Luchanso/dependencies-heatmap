import { Paper, TableHead } from "@material-ui/core";
import styled from "styled-components";

export const RootPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
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

export const EmptyStateWrapper = styled.div`
  margin-top: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EmptyStateHeader = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;
