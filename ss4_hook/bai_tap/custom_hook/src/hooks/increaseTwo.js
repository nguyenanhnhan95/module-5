import React,{useState} from "react";
function increaseTwo(){
    const[counterTwo,setCounterTwo] = useState(0);
    addCounter=()=>{
        setCounter(counterTwo+2);
    }
    return [counterTwo,setCounterTwo]
}