const { useEffect, useState } = require("react");

function TestUseEffect(){
    const [count,setCount]=useState(0)
    const [date, setDate] = useState(new Date());
    useEffect(()=>{
       
        document.title = ` ${count} times`;
        return ()=> console.log("nhan");
        
    },[count])
    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
}
export default TestUseEffect;