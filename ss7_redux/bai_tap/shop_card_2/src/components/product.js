import { useEffect, useState } from "react"
import { getProducts } from "../service/productService"
import { ProductAction } from "../actions/productAction"
import { useDispatch } from "react-redux"

function Product(){
    const [products,setProducts]= useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        getList();
    },[])
    const getList=async()=>{
        const data =await  getProducts()
        setProducts(data)
    }
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>
                            <button onClick={()=>dispatch(ProductAction(product))}>Add Cart</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}
export default Product;