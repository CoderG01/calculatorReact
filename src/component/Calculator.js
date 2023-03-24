import React,{useEffect, useState} from 'react'
import './main.css'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CloseIcon from '@mui/icons-material/Close';
import BackspaceIcon from '@mui/icons-material/Backspace';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const Calculator = () => {

const [inputValue, SetinputValue] = useState("");
const [handleZero,SethandleZero] = useState(false)



const getInput = (e) => {
    // let hasNumberOrNot = inputValue.includes("1","2","3","4","5","6","7","8","9")
    // if (!hasNumberOrNot) {
        // SetinputValue(inputValue.substring(1))
        const removeZero = () => {
            SetinputValue("")
            console.log("om : " + inputValue);
        }
        removeZero()
        console.log(inputValue);
        SetinputValue(inputValue + e)
        // SetinputValue(inputValue.concate(e))
        // SetinputValue(`${inputValue}${e}`)
        // console.log("type is : " + typeof(inputValue));
    // }else{
    //     alert('enter number first') 
    // }
    
}
   
const clearAll = () => {
    inputValue !== '' ? SetinputValue('0') : SetinputValue('0') 
    // inputValue !== '' ? SetinputValue('0') : alert('input field is empty')
    
}
const calculate = () => {

    //handling and error
    try{
        SetinputValue(eval(inputValue))
        // console.log(typeof(inputValue));   
    }
    catch(err){
        // console.log(err) 
        SetinputValue("error")
    }

    // let hasOPeratOrNot = inputValue.includes("+","*",".","/","-")
    // console.log(hasOPeratOrNot);
    // if (inputValue !== "" || !hasOPeratOrNot) {
    //     // console.log("clicked");
    //     SetinputValue(eval(inputValue))
    //     console.log(typeof(inputValue));    
    // }else
    // {
    //     alert("input field is empty")
    // }
    
}
const clearStepInmput = () => {
    if (inputValue !== "") {
        if (inputValue == "error") {
            SetinputValue('0')
        }else{
            SethandleZero(true)
            const inputLength = inputValue.length - 1;
            console.log("input length " + inputLength);
            SetinputValue(inputValue.substring(0,inputValue.length - 1))
            if(inputValue.length - 1 == 0){
                SetinputValue('0')
            }    
        }
    }
    else{
        alert("input field is empty")
    }
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
                                <Button variant="contained" disableElevation className='inputButton inputAction inputActionText text-uppercase fs-sm' onClick={clearAll}>AC</Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton inputAction inputActionText text-uppercase fixedHeight devidIcon' onClick={() => clearStepInmput()}><BackspaceIcon /></Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton inputAction inputActionText text-uppercase' onClick={() => getInput("*")}><CloseIcon /></Button>
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
                                <Button variant="contained" disableElevation className='inputButton inputAction inputActionText text-uppercase fs-sm' onClick={clearAll}><DarkModeIcon /></Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton' onClick={() => getInput("0")}>0</Button>
                            </div>
                            <div className="col-4 px-2">
                                <Button variant="contained" disableElevation className='inputButton inputAction inputActionText' onClick={() => getInput(".")} ><FiberManualRecordIcon style={{fontSize : "6px"}} /></Button>
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
