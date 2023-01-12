import React, { useState } from 'react'
import CalcButton from '../CalcButton/CalcButton'
import Results from '../Results/Results'
import './Calculator.css'

const Calculator = props => {

    const [result, setResult] = useState("100000")
    const [prevResult, setPrevResult] = useState("50 * ")
    const [reset, setReset] = useState(true);

    const operation = (operand) => () => {
        if (operand === "AC") {
            setPrevResult("");
            setResult("0");
            setReset(true);
        }
        else if (operand === "DEL"){
            setResult(result.length > 1 ? result.substring(0,result.length-1) : result);
        }
        else if ("*/-+".includes(operand)){
            try {
                setPrevResult(eval(prevResult + result) + operand);
            }
            catch (e) {
                setPrevResult(result + operand);
            } 

            setResult("");
            
        }
        else if (operand === "=") {
            try{
                setResult(eval(prevResult + result));
                setPrevResult("");
                setReset(true);
            } catch (e) {
                
            }
        }
        else if (reset) {
            setResult(operand);
            setReset(false);
        }
        else {
            setResult(result + operand);
        }


    }



    return (
        <div className="calculator">
            
            {/* Results View */}
            <Results val = {result} prevVal = {prevResult} />
            {/* <p className="Result">50</p> */}
            {/* Buttons */}
            <CalcButton className='wide' onClick = {operation("AC")}> AC </CalcButton>
            <CalcButton onClick = {operation("DEL")}> DEL </CalcButton>
            <CalcButton onClick = {operation("/")}> ÷ </CalcButton>
            <CalcButton onClick = {operation("1")}> 1 </CalcButton>
            <CalcButton onClick = {operation("2")}> 2 </CalcButton>
            <CalcButton onClick = {operation("3")}> 3 </CalcButton>
            <CalcButton onClick = {operation("*")}> * </CalcButton>

            <CalcButton onClick = {operation("4")}> 4 </CalcButton>
            <CalcButton onClick = {operation("5")}> 5 </CalcButton>
            <CalcButton onClick = {operation("6")}> 6 </CalcButton>
            <CalcButton onClick = {operation("+")}> + </CalcButton>

            <CalcButton onClick = {operation("7")}> 7 </CalcButton>
            <CalcButton onClick = {operation("8")}> 8 </CalcButton>
            <CalcButton onClick = {operation("9")}> 9 </CalcButton>
            <CalcButton onClick = {operation("-")}> - </CalcButton>

            <CalcButton onClick = {operation(".")}> . </CalcButton>
            <CalcButton onClick = {operation("0")}> 0 </CalcButton>
            <CalcButton className='wide' onClick = {operation("=")}> = </CalcButton>


        </div>
    )
}

export default Calculator