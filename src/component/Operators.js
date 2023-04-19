import React from "react";
import { Button } from "@mui/material";
const Operators = ({ updateOperator, op, cls, opText }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      className={`inputButton inputAction inputActionText text-uppercase fixedHeight ${cls}`}
      onClick={() => updateOperator(op)}
    >
      {opText}{" "}
    </Button>
  );
};

export default Operators;
