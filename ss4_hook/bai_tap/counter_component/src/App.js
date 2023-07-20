import { useState,useEffect} from "react";
function App(){
  const [counter,setCounter]=useState(0);
  const [counterTwo,setCounterTwo]=useState(0);
  const [type,setType]=useState('add1');
    return (
      <div>
      <p>Count:{counter}</p>
      <button onClick={()=>(setCounter(counter+1))}>Add1</button>
      <p>Count2:{counterTwo}</p>
      <button onClick={()=>{
        setCounterTwo((previousCounter)=>previousCounter+1);
        setCounterTwo((previousCounter)=>previousCounter+1);
      }}>Add2</button>
   
      </div>
    );
    }
export default App;