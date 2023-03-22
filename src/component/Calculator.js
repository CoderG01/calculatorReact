import React,{useState} from 'react'
import './main.css'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import SelectInput from '@mui/material/Select/SelectInput';
import CloseIcon from '@mui/icons-material/Close';
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const Calculator = () => {

const [inputValue, SetinputValue] = useState("");

const getInput = (e) => {
    console.log(e);
    SetinputValue(inputValue.concat(e   ))
}

const clearAll = () => {
    inputValue !== '' ? SetinputValue('') : alert('input field is empty')
    
}
const calculate = () => {
    console.log("clicked");
     SetinputValue(eval(inputValue).toString())
}

  return (
    <div className='MainCont d-flex align-items-center justify-content-center'>
        <Box className="calc_box">
            <div className='d-flex align-items-center justify-content-center py-4'>
                <CalculateOutlinedIcon className='mx-1' style={{color : "#FFDD83",fontSize :"40px"}}/><h1 style={{color : "#FFDD83"}}>Calcualtor</h1>
            </div>
            <div className='card'>
                <input type="text" name="result" id="result" value={inputValue} readOnly/>
                <Box bgcolor="#202020" className="rounded-3 d-flex mt-3">
                    <Box direction="row" spacing={2} className="rounded-3 mt-3" p={3} pb={2} pt={0} pr={2}>
                        <div className="row py-2">
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton inputAction inputActionText text-uppercase pieIcon' >𝝅</Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton inputAction inputActionText text-uppercase'>x²</Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton inputAction inputActionText text-uppercase' onClick={() => getInput("x")}><CloseIcon /></Button>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton' onClick={() => getInput("7")}>7</Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton' onClick={() => getInput("8")}>8</Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton' onClick={() => getInput("9")}>9</Button>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton' onClick={() => getInput("4")}>4</Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton' onClick={() => getInput("5")}>5</Button>
                            </div>
                            
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton' onClick={() => getInput("6")}>6</Button>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton' onClick={() => getInput("1")}>1</Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton' onClick={() => getInput("2")}>2</Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton' onClick={() => getInput("3")}>3</Button>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton' onClick={() => getInput(".")} ><FiberManualRecordIcon style={{fontSize : "6px"}} /></Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton' onClick={() => getInput("0")}>0</Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton inputAction inputActionText text-uppercase fs-sm' onClick={clearAll}>Del</Button>
                            </div>
                        </div>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} pt={1} ps={'0'} className="mt-3" mr={2} >
                        <Button variant="contained" disableElevation className='inputButton inputAction inputActionText text-uppercase fixedHeight devidIcon' onClick={() => getInput("/")}>÷</Button>
                        <Button variant="contained" disableElevation className='inputButton inputAction inputActionText text-uppercase fixedHeight my-3' onClick={() => getInput("-")}><RemoveIcon /></Button>
                        <Button variant="contained" disableElevation className='inputButton inputAction inputActionText text-uppercase fixedHeight mb-2'onClick={() => getInput("+")}><AddIcon /></Button>
                        <Button variant="contained" disableElevation className='inputButton inputAction inputActionText text-uppercase fixedHeight equal mt-2 d-flex align-items-end pb-3' onClick={() => calculate()}>=</Button>
                    </Box>
                </Box>
            </div>
        </Box>
        <a href='https://its-harsh.netlify.app/' className='text-white bottomTitle my-3 text-decoration-none'>Made By Coder-G</a>
    </div>
  )
}

export default Calculator
