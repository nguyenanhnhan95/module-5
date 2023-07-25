
import { useState ,useReducer, useRef} from "react"

function Reducer(){
   
    const initSate={
        job:"",
        jobs:["nhan"]
    };
    const SET_JOB='set_job'
    const ADD_JOB="add_job"
    const DELETE_JOB="delete_job"
    const reducer = (state,action)=>{
        console.log(action.type)
        switch(action.type){ 
            case SET_JOB:
                return {
                    ...state,
                    job:action.payLoad
                };
                break;
            case ADD_JOB:
               
                return{
                    job:"",
                    jobs:[...state.jobs,action.job]
                }
                break;
            case DELETE_JOB:
                const newState=[...state.jobs]
                newState.splice(action.index,1)
                return{
                    job:"",
                    jobs:newState
                }
                break;
            default:
                throw new Error("Invalid action")
        }
        
    }
    
    const [state,dispatch]=useReducer(reducer,initSate);
    console.log(dispatch.type)
    console.log(state.job)
    const {job,jobs}=state;
   const setJob=payLoad=>{
    return{
        type:SET_JOB,
        payLoad
    }
   }
   const inputRef=useRef()
    return(
        <>
        <h1>Todo</h1>
        <input ref={inputRef} value={job} onChange={(e)=>{dispatch(setJob(e.target.value))}}/>
        <button onClick={()=>{
            dispatch({               
                    type:ADD_JOB,
                    job:job           
            })
            inputRef.current.focus()
        }}
       >Add</button>
        <ul>
            {jobs.map((job,index)=>(
                <li key={index}>{job}
                <span><button onClick={()=>{dispatch({
                    type:DELETE_JOB,
                    index:{index}
                })}}>Delete</button></span>
                </li>
            ))}
        </ul>
        </>
    )
}
export default Reducer;