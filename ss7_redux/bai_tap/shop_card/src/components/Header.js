import { useSelector } from "react-redux";
import { getNumberOfProductsInCart } from "../actions/cartAction";

function Header(){
    const numberOfProductsInCart = useSelector(getNumberOfProductsInCart);
    

    return (
        <nav>
            <ul>
                <li>
                    Home
                </li>
                <li style={{marginLeft: "20px"}}>
                   
                </li>
            </ul>
            <ul>
                <li>{numberOfProductsInCart} Cart</li>
            </ul>
        </nav>
    )
}
export default Header;