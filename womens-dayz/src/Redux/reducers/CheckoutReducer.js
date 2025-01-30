import { allProducts } from "../../Data/Products_datas";
import { ADDTOC } from "../actions/CheckoutAction";

const checkout = [
   
    ]

const CheckoutReducer = (state = checkout, action) => {
    switch (action.type) {
        case ADDTOC:
            const b = allProducts.find(product => product.id === action.id);
            if (b) {
                const checkoutProduct = {
                    id: b.id,
                    name: b.name,
                    price: b.price,
                    img: b.img
                };
                const Checkout = checkoutProduct

                return Checkout;
            }
        default:
            return state;
        }
    }

export default CheckoutReducer;
