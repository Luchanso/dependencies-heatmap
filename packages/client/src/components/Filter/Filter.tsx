import { TextField, Chip } from "@material-ui/core";
import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { useDependenciesMapTable } from "../DependenciesTable/useDependenciesMap";

export const Filter = () => {
  const { firstColumn } = useDependenciesMapTable();

  return (
    <Autocomplete
      id="filter"
      multiple
      onChange={ (e, t) => console.log(t) }
      options={ firstColumn }
      getOptionLabel={ option => option }
      renderTags={(value: any[], getTagProps) =>
        value.map((option, index) => (
          <Chip label={option} color="primary" {...getTagProps({ index })} />
        ))
      }
      renderInput={params => (
        <TextField
          {...params}
          placeholder="react, react-dom, redux, jest"
          variant="filled"
          label="filter"
          autoFocus
          fullWidth
        />
      )}
    />
  );
};
