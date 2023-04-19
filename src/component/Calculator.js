import React, { useEffect, useState } from "react";
import "./main.css";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import { Box, Button } from "@mui/material";
import {
  Remove as RemoveIcon,
  Add as AddIcon,
  FiberManualRecord as FiberManualRecordIcon,
  Close as CloseIcon,
  Backspace as BackspaceIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";
import Number from "./Number";
import Operators from "./Operators";

const numArray = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
];
const Calculator = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("");
  const [inputValue, setInputValue] = useState(0);
  const [labelText, setLabelText] = useState("");

  const updateLabel = () => {
    if (operator == "") {
      setLabelText(firstNum.toString());
    } else {
      setLabelText(
        `${firstNum.toString()}${operator.toString()}${
          secondNum != 0 ? secondNum.toString() : ""
        }`
      );
    }
  };
  const updateOperator = (opt) => {
    if (firstNum == "") {
      setFirstNum(0);
    }
    if (operator == "") {
      setOperator(opt, updateLabel());
      setInputValue("");
    }
  };
  const setNum = (e) => {
    let strValue = e.toString();
    if (operator == "") {
      setFirstNum((prev) => {
        return parseInt(prev.toString() + strValue);
      });
      setInputValue(parseInt(firstNum.toString() + strValue));
    } else {
      setSecondNum((prev) => {
        return parseInt(prev.toString() + strValue);
      });
      setInputValue(parseInt(secondNum.toString() + strValue));
    }
  };
  useEffect(() => {
    if (firstNum != 0 || secondNum != 0) {
      updateLabel();
    }
  }, [firstNum, secondNum, operator]);
  const clearAll = () => {
    // reset all values
    setFirstNum(0);
    setSecondNum("");
    setOperator("");
    setInputValue(0);
    setLabelText("");
  };

  // document.addEventListener("keypress", function (e) {
  //   if (
  //     (e.keyCode > 95 && e.keyCode < 106) ||
  //     (e.keyCode > 48 && e.keyCode < 58)
  //   ) {
  //     console.log(e.key);
  //     // setNum(e.key);
  //   }
  // });

  const calculate = () => {
    let res = eval(
      `${firstNum}${
        operator != ""
          ? `${operator}${
              secondNum === ""
                ? operator === "/" || operator === "*"
                  ? 1
                  : 0
                : secondNum
            }`
          : ""
      }`
    );
    setInputValue(res);
    setFirstNum(res);
    setSecondNum("");
    setOperator("");
  };

  return (
    <div className="MainCont d-flex align-items-center justify-content-center">
      <Box className="calc_box">
        <div className="d-flex align-items-center justify-content-center py-4">
          <CalculateOutlinedIcon
            className="mx-1"
            style={{ color: "#FFDD83", fontSize: "40px" }}
          />{" "}
          <h1 style={{ color: "#FFDD83" }}> Calcualtor </h1>{" "}
        </div>{" "}
        <div className="card">
          <div id="screen">
            <label className=""> {labelText} </label>{" "}
            <input
              type="text"
              name="result"
              // id="result"
              value={inputValue}
              readOnly
            />{" "}
            {/* <div className="output"> {inputValue} </div>{" "} */}{" "}
          </div>{" "}
          <Box bgcolor="#202020" className="rounded-3 d-flex mt-3">
            <Box
              direction="row"
              spacing={2}
              className="rounded-3 mt-3"
              p={3}
              pb={2}
              pt={0}
              pr={2}
            >
              <div className="row py-2">
                <div className="col-4 px-2">
                  <Button
                    variant="contained"
                    disableElevation
                    className="inputButton inputAction inputActionText text-uppercase fs-sm"
                    onClick={() => {
                      clearAll();
                    }}
                  >
                    {" "}
                    AC{" "}
                  </Button>{" "}
                </div>{" "}
                <div className="col-4 px-2">
                  <Button
                    variant="contained"
                    disableElevation
                    className="inputButton inputAction inputActionText text-uppercase fixedHeight devidIcon"
                    // onClick={() => clearStepInmput()}
                  >
                    {" "}
                    <BackspaceIcon />{" "}
                  </Button>{" "}
                </div>{" "}
                <div className="col-4 px-2">
                  <Operators
                    op="*"
                    updateOperator={updateOperator}
                    cls="devidIcon"
                    opText={<CloseIcon />}
                  />
                </div>{" "}
              </div>{" "}
              {numArray.map((numRow, index) => {
                return (
                  <div className="row py-2" key={index}>
                    {numRow.map((single_number) => {
                      return (
                        <Number
                          key={single_number}
                          setNum={setNum}
                          num={single_number}
                        />
                      );
                    })}
                  </div>
                );
              })}
              <div className="row py-2">
                <div className="col-4 px-2">
                  <Button
                    variant="contained"
                    disableElevation
                    className="inputButton inputAction inputActionText text-uppercase fs-sm"
                    onClick={clearAll}
                  >
                    {" "}
                    <DarkModeIcon />{" "}
                  </Button>{" "}
                </div>{" "}
                <div className="col-4 px-2">
                  <Button
                    variant="contained"
                    disableElevation
                    className="inputButton"
                    onClick={() => setNum(0)}
                  >
                    {" "}
                    0{" "}
                  </Button>{" "}
                </div>{" "}
                <div className="col-4 px-2">
                  <Button
                    variant="contained"
                    disableElevation
                    className="inputButton inputAction inputActionText"
                  >
                    {" "}
                    <FiberManualRecordIcon style={{ fontSize: "6px" }} />{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </Box>{" "}
            <Box
              display={"flex"}
              flexDirection={"column"}
              pt={1}
              ps={"0"}
              className="mt-3"
              mr={2}
            >
              <Operators
                op="/"
                updateOperator={updateOperator}
                cls="devidIcon"
                opText="÷"
              />
              <Operators
                op="-"
                updateOperator={updateOperator}
                cls="my-3"
                opText="-"
              />
              <Operators
                op="+"
                updateOperator={updateOperator}
                cls="mb-2"
                opText="+"
              />
              <Button
                variant="contained"
                disableElevation
                className="inputButton inputAction inputActionText text-uppercase fixedHeight equal mt-2 d-flex align-items-end pb-3"
                onClick={() => calculate()}
              >
                {" "}
                ={" "}
              </Button>{" "}
            </Box>{" "}
          </Box>{" "}
        </div>{" "}
      </Box>{" "}
    </div>
  );
};

export default Calculator;
