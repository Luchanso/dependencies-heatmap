import { Link, Typography } from "@material-ui/core";
import React, { memo } from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./images/not-found.gif";

const Gif = styled.div`
  background-image: url(${NotFound});
  height: 350px;
  width: 275px;
  background-size: cover;
`;

const Container = styled.div`
  height: calc(100vh - 8px * 2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const Copyright = styled(Typography)`
  position: absolute;
  bottom: 8px;
  right: 8px;
`;

export const NotFoundPage = memo(function NotFoundPage() {
  return (
    <Container>
      <Gif />
      <Description>
        <Typography>404 - Not Found</Typography>
        <Links>
          <Link component={RouterLink} to="/" variant="body1">
            Depencies list
          </Link>
          <Link component={RouterLink} to="/add" variant="body1">
            Add dependencies
          </Link>
        </Links>
      </Description>
      <Copyright variant="caption">
        gif from{" "}
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://giphy.com/gifs/89a-eightninea-VwoJkTfZAUBSU"
        >
          Mathew Lucas
        </Link>
      </Copyright>
    </Container>
  );
});
