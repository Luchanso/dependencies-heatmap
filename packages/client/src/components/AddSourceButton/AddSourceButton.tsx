import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

type Props = {
  disabled?: boolean;
}

/**
 * Button which add sources
 */
export const AddSourceButton = ({ disabled = false }: Props) => {
  const history = useHistory();

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => history.push("/add")}
      disabled={ disabled }
    >
      Add source
    </Button>
  );
};
