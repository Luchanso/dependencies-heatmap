import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

/**
 * Button which add sources
 */
export const AddSourceButton = () => {
  const history = useHistory();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => history.push("/add")}
    >
      Add source
    </Button>
  );
};
