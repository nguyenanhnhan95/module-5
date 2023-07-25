import { createStore } from "redux";
const initState=0;
function Redux(){
function reducer(state=initState,action){
    switch(action.type){
        case"Deposit":
        return state+action.payload
        case "WITHDRAW":
            return state-action.payload;
        default:
            return state
    }
}
const store = createStore(reducer)
console.log(store)
return (
    <>
    <p>{store.getState()}</p>
    </>
)
}
export default  Redux;