import React from "react";
import {upAction,downAction,multiAction,restartAction,upDateAction} from '../../../store/action/counter-action';
import {counterContext} from '../../../contexts/Contexts';
import { useReducer,useState } from "react";


function Counter(){
    const[contextState,dispatch]=useReducer(counterContext)
    // const{userInput,setUserInput}=useState("")

    return(
     <>
     {contextState}
     <button onClick={() => dispatch(upAction())}>UP</button>
     <button onClick={() => dispatch(downAction())}>DOWN</button>
     <button onClick={() => dispatch(multiAction())}>MULTIPLY</button>
     <button onClick={() => dispatch(restartAction(0))}>RESTART</button>
     {/* <input type="text" onChange={(e) => setUserInput(e.target.value)} /> */}
     <button onClick={() => dispatch(upDateAction(7))}>DATA</button>
     </>   
    )
}