// rootReducer.js
import { combineReducers } from 'redux';
import Cartreducer from './Cartreducer';
import WhistlistReducer from './WhistlistReducer';
import SingleReducer from './SingleReducer';
import CheckoutReducer from './CheckoutReducer';
import OrderReducer from './OrderReducer';
import Addressreducer from './AddressReducer';
import Profilereducer from './ProfileReducer';


const rootReducer = combineReducers({
  cart: Cartreducer,
  Whistlist: WhistlistReducer,
  Single: SingleReducer,
  Checkout: CheckoutReducer,
  Orders: OrderReducer,
  Address: Addressreducer,
  Profile: Profilereducer

});

export default rootReducer;
