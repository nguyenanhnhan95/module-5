import { useDispatch } from "react-redux";
import { createStore } from "redux";

function App() {
  const initState = 0;
  const dispatch=useDispatch;

  function reducer(state = initState, action) {
    switch (action.type) {
      case "DEPOSIT":
        return state + action.payload;
      case "WITHDRAW":
        return state - action.payload;
      default:
        return state;
    }
  }

  function actionDeposit(payload) {
    return {
      type: "DEPOSIT",
      payload:payload
    };
  }

  function actionWithdraw(payload) {
    return {
      type: "WITHDRAW",
      payload:payload
    };
  }

 const store = createStore(reducer);
  console.log(store);

  return (
    <div>
      <p>Current balance: {store.getState()}</p>
      <button onClick={() => store.dispatch(actionDeposit(10))}>
        Deposit 10
      </button>
      <button onClick={() => store.dispatch(actionWithdraw(10))}>
        Withdraw 10
      </button>
    </div>
  );
}

export default App;
