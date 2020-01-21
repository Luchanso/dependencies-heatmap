import {
  Button,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";
import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { Container } from "./styled";
import { useDependenciesUpdater } from "./useDependenciesUpdater";

export const AddPage = () => {
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleAdd}
                disabled={disabled}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
