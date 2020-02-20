import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Buttons } from "./styled";
import { useDependenciesUpdater } from "./useDependenciesUpdater";

export const AddPage = () => {
  const history = useHistory();
  const [onAddDependency] = useDependenciesUpdater();
  const [source, setSource] = useState("");
  const disabled = source.length === 0;

  function handleChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    setSource(value);
  }

  function handleAdd() {
    setSource("");
    onAddDependency(source);
  }

  function handleEnterKey({ key }: KeyboardEvent) {
    if (key === "Enter" && !disabled) {
      handleAdd();
    }
  }

  function handleGoToMain() {
    history.push("/");
  }

  return (
    <Container>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="h2">Add dependencies source</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <TextField
                id="source"
                placeholder="git project link"
                variant="outlined"
                label="Source"
                autoFocus
                fullWidth
                value={source}
                onChange={handleChange}
                onKeyDown={handleEnterKey}
                onSubmit={handleAdd}
              />
            </Grid>
            <Grid item container direction="row-reverse">
              <Buttons>
                <Button
                  variant="text"
                  color="default"
                  onClick={handleGoToMain}
                >
                  Show dependencies
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAdd}
                  disabled={disabled}
                >
                  Add
                </Button>
              </Buttons>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
