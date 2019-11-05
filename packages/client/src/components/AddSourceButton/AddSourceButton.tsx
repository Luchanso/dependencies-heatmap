import React from "react";
import Button from "@material-ui/core/Button";

type Props = {
  onClick: () => void;
};

/**
 * Button which add sources
 */
export const AddSourceButton = ({ onClick }: Props) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    Add source
  </Button>
);
