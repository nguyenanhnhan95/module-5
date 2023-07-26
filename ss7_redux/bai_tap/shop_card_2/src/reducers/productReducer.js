const initialValue={
    cart:[],
}
export const ProductReducer = (state = initialValue, action) => {
    switch (action.type) {
        case "ADD_CART":
            const cart = [...state.cart]
            const result = cart.some(product => product.id === action.payload.id);
            alert(result)
        default:
            return state;
    }

}