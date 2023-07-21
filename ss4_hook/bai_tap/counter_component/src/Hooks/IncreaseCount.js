import React,{useState} from "react";
function IncreaseCount(number){
    const [counter,setCounter]=useState(number);
   const clickCounter =()=>{
        setCounter((previous)=>(previous+number))
    }
    return [counter,clickCounter]
}
export default IncreaseCount;