import React,{useState} from "react";
function increaseOne(){
    const[counter,setCounter] = useState(0);
    addCounter=()=>{
        setCounter(counter+1);
    }
    return [counter,setCounter]
}