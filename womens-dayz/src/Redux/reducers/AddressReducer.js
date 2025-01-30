import { allProducts } from "../../Data/Products_datas";
import { ADDRESS, DELETEADD } from "../actions/AddressAction";

const address = [
  {
    "addressType": "Home",
    "firstName": "Usha",
    "lastName": "Gopal",
    "email": "ushagopal19082002@gmal.com ",
    "company": "Techno",
    "address1": "Add1",
    "address2": "Add2",
    "country": "India",
    "state": "Tamilnadu",
    "city": "Sivaganga",
    "postalCode": "608301",
    "mobileNumber": "8072009709",
    "landmark": "Post office opp"
}
]
 
const Addressreducer = (state = address, action) => {   
  switch (action.type) {
    case ADDRESS:
        return [...state,action.key]; 
    
    case DELETEADD:
     return state.filter((item, index) => index !== action.index);
            
    default:
        return state;
    }
  };
  
  export default Addressreducer;