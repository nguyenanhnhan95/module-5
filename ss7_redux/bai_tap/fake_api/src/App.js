import { useDispatch,useSelector } from "react-redux";
import { getUsersFetch,deleteUsersFetch } from "./action";
function App(){
  const dispatch=useDispatch();
  const users=useSelector(state=>state.UserReducer.users);
  
  return(
    <>
    <button onClick={()=>dispatch(getUsersFetch())}>Get</button>
    {/* <div>User : {users.map((user=>(<div>{user.phone}</div>)))}</div> */}
    <div>
    <table>
      <thead>
        <th>id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Website</th>
        <th>Action</th>
      </thead>
      <tbody>
        {users && users.map((user)=>(
          <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.street}</td>
          <td>
            <button onClick={()=>dispatch(deleteUsersFetch(user.id))}>Delete</button>
          </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
}
export default App;