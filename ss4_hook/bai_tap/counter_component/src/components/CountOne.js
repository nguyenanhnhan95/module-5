import IncreaseCount from "../Hooks/IncreaseCount";
function CountOne(){
    const [counter,clickCounter]=IncreaseCount(1);
    return(
      <>
      <p>Counter: {counter}</p>
      <button type="button" onClick={clickCounter}>Increase 1</button>
      </>
    )
}
export default CountOne;