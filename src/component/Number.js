import React from "react";
import { Button } from "@mui/material";

const Number = ({ setNum, num }) => {
  return (
    <div className="col-4 px-2">
      <Button
        variant="contained"
        disableElevation
        className="inputButton"
        onClick={() => setNum(num)}
      >
        {num}{" "}
      </Button>{" "}
    </div>
  );
};

export default Number;
