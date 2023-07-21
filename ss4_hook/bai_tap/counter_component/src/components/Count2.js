import IncreaseCount from "../Hooks/IncreaseCount";
function Count2(){
    const [counter,clickCounter]=IncreaseCount(2);
  return(
    <>
    <p>Counter: {counter}</p>
    <button type="button" onClick={clickCounter}>Increase 2</button>
    </>
  )
}
export default Count2;