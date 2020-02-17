import { Chip, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { ChangeEvent } from "react";
import { useFilters } from "./useFilters";

export const Filter = () => {
  const { availableFilters, setFilters /*, filters */ } = useFilters();

  function handleChange(event: ChangeEvent<{}>, value: string[]) {
    setFilters(value);
  }

  return (
    <Autocomplete
      autoComplete
      id="filter"
      multiple
      options={availableFilters || []}
      filterSelectedOptions
      getOptionLabel={option => option}
      onChange={handleChange}
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
          fullWidth
        />
      )}
    />
  );
};
