import { useEffect, useState } from "react";
import { requestServerStudent } from "../service/StudentService";

function Student(){
    const [students,setStudents]=useState([])
    const [page,setPage]=useState(0)
    const [search,setSearch]=useState()
    useEffect(()=>{
        
        getStudentList()
    },[page])
    const getStudentList=()=>{
        console.log(search)
        requestServerStudent(page,search).then((data)=>{
            
            console.log(data)
            setStudents(data.content)
        }).catch(()=>{
            console.log("loi")
        })
    }
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <td>STT</td>
                        <td>Name</td>
                        <td>Address</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {students && students.map((student,index)=>(
                        <tr key={index}>
                        <td>{student.nameStudent}</td>
                        <td>{student.addressStudent}</td>
                        <td><button>detail</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="Pagination-student">

            </div>
        </div>
    )
}
export default Student;