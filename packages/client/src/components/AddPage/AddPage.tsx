import React from "react";
import {
  Typography,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Button
} from "@material-ui/core";
import { Container } from "./styled";

export const AddPage = () => (
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
              placeholder="git link or npm package name"
              variant="outlined"
              label="Source"
              fullWidth
            />
          </Grid>
          <Grid item>
            <Grid container justify="space-between">
              <Grid item>
                <FormControlLabel
                  control={<Checkbox value="checkedA" />}
                  label="Import all dependencies from package/git repository"
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary">
                  Add
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
);
