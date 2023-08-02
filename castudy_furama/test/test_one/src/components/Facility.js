import { useEffect, useState } from "react"
import { getFacilities } from "../service/facilityService"

function Facility (){
    const [facilities,setFacilities] = useState([])
    const getList=async()=>{
        const data = await getFacilities()
        setFacilities(data)
    }
    useEffect(()=>{
        getList()
    },[])
    if(facilities.length===0){
        return null
    }
    return(
        <>
        <table>
            <thead>
                <th>id</th>
                <th>name</th>
                <th>area</th>
            </thead>
            <tbody>
                {facilities.map((facility)=>(
                    <tr key={facility.id}>
                        <td>{facility.id}</td>
                        <td>{facility.name}</td>
                        <td>{facility.area}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default Facility;