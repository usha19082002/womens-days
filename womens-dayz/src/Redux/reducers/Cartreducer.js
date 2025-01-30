import { allProducts } from "../../Data/Products_datas";
import { ADD, DELETE, DFC, QTY } from "../actions/CartAction";

const cart = [

]
 
const Cartreducer = (state = cart, action) => {   
  switch (action.type) {
    case ADD:
        const a = allProducts.find(product => product.id === action.id)
        const newObj ={
            id:a.id,
            name:a.name,
            price:a.price,
            img:a.img,
            offer: a.off,
            quantity:1
        }
        
       return [...state,newObj] 
    case DFC:
        return state.filter((item, index) => index !== action.key);
     
    case QTY: 
      const updatedCart = state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            quantity: Number(action.qty)
          };
        } else {
          return item;
        }
      })
      return updatedCart
        
    default:
      return state;
  }
};

export default Cartreducer;
