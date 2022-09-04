import { createContext,useReducer } from "react";
import {counterReduce} from "../store/reducer/reducerCounter"
export const counterContext = createContext()

export default function CounterProvider({children}){
    const[contextState,dispatch]=useReducer(counterReduce,0)

    return(
        <counterContext.Provider value={{contextState,dispatch}} >
         {children}
        </counterContext.Provider>
    )
}