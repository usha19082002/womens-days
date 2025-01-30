import { ADDTO } from "../actions/OrderAction";

const Orders = []; // Initial state for the Orders slice

const generateUniqueId = () => {
  return '#' + Math.random().toString(36).substr(2, 9);
}

const OrderReducer = (state = Orders, action) => {
  switch (action.type) {

    case ADDTO:
      

      const totalAmount = action.key.reduce((total, item) => total + Math.abs((Math.floor((item.offer / 100) * item.price - item.price) * item.quantity)), 0);

      console.log(action.price)

      const newOrder = {
        id: generateUniqueId(),
        total: totalAmount - action.price,
        discount: action.price,
        data: action.key
      };
      return [...state, newOrder];

    default:
      return state; 
  }
};

export default OrderReducer;
