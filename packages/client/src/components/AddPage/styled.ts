import styled from "styled-components";
import { Container as uiContainer } from "@material-ui/core";

export const Container = styled(uiContainer)`
  margin-top: 120px;
`;

export const Buttons = styled.div`
  button + button {
    margin-left: 12px;
  }
`;
