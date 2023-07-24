import React, { useEffect, useState } from "react";
import { addListToDo, getListToDo } from "../TodoSerivce";
function TodoList(){
    const [item,setItem] = useState("")
    const [lists,setLists]=useState([]);
    useEffect(()=>{
        const getList=async () => {
            const data = await getListToDo();
            setLists(data)
        }
        getList();
    }
    ,[]);
      const handleChange= (event)=>{
        setItem(event.target.value)
        console.log(item)
      }

    return (
    
        <div style={{ textAlign: "center", padding: 30 }}>
        <h1 style={{textAlign:"center"}}>Too List</h1>
        <input type="text" onChange={handleChange}></input>
      <button type="submit" onClick={()=>{
        addListToDo({
            id:lists.length+1,
            title: item,
            completed : false,
        }).then(()=>{
            getListToDo().then((data)=>{
                setLists(data)
            });
        })
    
      }}>Submit</button>
      <table>
        <tbody>
            {lists.map((list)=>(
                <tr key={list.id}>
                    <td>{list.title}</td>
                </tr>
            ))}
        </tbody>
      </table>
      </div>    
    )
}
export default TodoList; 