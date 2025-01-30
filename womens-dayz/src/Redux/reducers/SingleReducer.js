import { allProducts } from "../../Data/Products_datas";
import { ADDTOS, SQTY } from "../actions/SingleAction";

const single = [
 
    ]

const SingleReducer = (state = single, action) => {
    switch (action.type) {
        case ADDTOS:
            const b = allProducts.find(product => product.id === action.id);
            if (b) {
                const singleProduct = {
                    id: b.id,
                    name: b.name,
                    price: b.price,
                    img: b.img,
                    offer:b.off,
                    quantity: action.qty,
                    
                    previews: {
                        0: b.previews[0],
                        1: b.previews[1],
                        2: b.previews[2],
                        3: b.previews[3],
                        4: b.previews[4]
                    }
                };
                const single = singleProduct

                return single;
            }
        
        case SQTY:
            const uqty = allProducts.find(product => product.id === action.id);
            if(uqty){
                single.quantity = action.qty
            }
        default:
            return state;
        }
    }

export default SingleReducer



