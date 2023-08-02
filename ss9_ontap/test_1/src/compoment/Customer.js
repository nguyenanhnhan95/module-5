import { useEffect, useState } from "react";
import { deleteCustomerApi, findCustomerApi, getCustomers } from "../service/CustomerService";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Swal from 'sweetalert2';

function Customer() {
    const [customers, setCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigation = useNavigate();
    useEffect(() => {
        getCustomers(currentPage).then((data) => {
            if (data.length === 0) {
                setCurrentPage(currentPage - 1)
            }
            setCustomers(data)
        })
    }, [currentPage])
    
    const nextPage = () => {

        setCurrentPage(currentPage + 1)
    }
    const previousPage = () => {
        if (currentPage === 1) {

        } else {
            setCurrentPage(currentPage - 1);
        }
    }
    const deleteCustomer = (id) => {
        deleteCustomerApi(id).then(() => {
            getCustomers().then((data) => {
                setCustomers(data)
            })
            Swal.fire({
                icon: "success",
                title: "Delete success fully!",
                showConfirmButton: false,
                timer: 15000
            })
        })
    }
    const handleFindCustomer = (e) => {
        console.log(e.target.value)
        findCustomerApi(e.target.value).then((data)=>{
            setCustomers(data)
        })

    }
  
    return (
        <>
            <Link to={`\create`}>Create</Link>
            <label>Search
                <input type="text" id="name" name="name" onChange={handleFindCustomer} />
            </label>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Birth Of Date</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Type Customer</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {customers && customers.map((customer, index) => (
                        <tr key={index}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.birth}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.address}</td>
                            <td>{customer.typeCustomer.nameType}</td>
                            <td>
                                <button onClick={() => { deleteCustomer(customer.id) }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><button onClick={previousPage} class="page-link" href="#">Previous</button></li>

                    <li class="page-item"><button onClick={nextPage} class="page-link" href="#">Next</button></li>
                </ul>
            </nav>
        </>
    )
}
export default Customer;