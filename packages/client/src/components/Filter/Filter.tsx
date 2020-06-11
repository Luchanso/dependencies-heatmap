import { Chip, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { ChangeEvent } from "react";
import { useFilters } from "./useFilters";

export const Filter = () => {
  const { availableFilters = [], setFilters, filters } = useFilters();

  function handleChange(event: ChangeEvent<{}>, value: string[]) {
    setFilters(value);
  }

  return (
    <Autocomplete<string>
      autoComplete
      id="filter"
      multiple
      options={availableFilters}
      filterSelectedOptions
      getOptionLabel={option => option}
      onChange={handleChange}
      value={filters}
      renderTags={(value: any[], getTagProps) =>
        value.map((option, index) => (
          <Chip label={option} color="primary" {...getTagProps({ index })} />
        ))
      }
      renderInput={params => (
        <TextField
          {...params}
          placeholder={availableFilters?.slice(0, 3).join(', ')}
          variant="filled"
          label="filter"
          fullWidth
        />
      )}
    />
  );
};
