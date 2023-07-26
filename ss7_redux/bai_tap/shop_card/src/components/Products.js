import { useState,useEffect,useDispatch } from "react";
import { getProducts } from "../service/productService";
import { cartAction } from "../actions/cartAction";
import ProductCard from "./ProductCart";

function Products(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        getList()
    },[])
    const getList=async()=>{
        const data = await getProducts();
        setProducts(data);
    }
    return(
    
        <div style={{ display: 'flex' }}>
            {
                products.map((product, index) => {
                    return (
                        <ProductCard key={`p_${index}`} product={product} />
                    )
                })
            }
        </div>
    )
}
export default Products;