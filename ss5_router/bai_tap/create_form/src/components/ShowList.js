import { Link } from "react-router-dom";
import { List } from "./ListForm";
function ShowList(){
    return(
        <>
        <Link to={`/list/new`}>Create</Link>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                </tr>
            </thead>
            <tbody>
                {List.map((l)=>(
                    <tr key={l.id}>
                        <td>{l.id}</td>
                        <td>{l.name}</td>
                        <td>{l.email}</td>
                        <td>{l.phone}</td>
                        <td>{l.message}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>
        </>
    );
}
export default ShowList;