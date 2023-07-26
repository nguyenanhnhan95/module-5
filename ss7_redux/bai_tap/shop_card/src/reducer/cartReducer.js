const initialValue = {
    cart: []
}
export const cartReducer=(state=initialValue,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            const cart = [...state.cart];
            const index = cart.findIndex(p => p.id === action.payload.id);
            if (index >= 0) {
                cart[index].quantity += 1;
                return { cart };
            }

            cart.push({ ...action.payload, quantity: 1 });
            return { cart }
        default:
            return state;
    }
}