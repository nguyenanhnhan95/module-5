import { type } from "@testing-library/user-event/dist/type";
import { useDispatch } from "react-redux"
import { createStore } from "redux";
function User(User){
    const dispatch=useDispatch();
    const initState={
        users:[]
    }
    console.log(User[0])
    function reducerUser(state=initState,action){
        switch(action.type){
            case "GET_LIST":
          
                const newUsers=[...state.users]
                return {
                    users:newUsers,
                }
                default:
                    return state;
        }
       
    }
    const showList = () => {
        dispatch({
            type:"GET_LIST",
            payload:User
        });
    }
    const rootReducer = combineReducers({
        reducerUser: reducerUser,
    })
  
    return (
        <>
        
        </>
    )
}
export const store=createStore(rootReducer)
export default User;