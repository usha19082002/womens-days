import { ADDPROF } from "../actions/ProfileAction";

const profile = [
    {
    firstName: "Usha",
    lastName: "Gopal",
    mobileNumber:"8925614653"
}
]
 
const Profilereducer = (state = profile, action) => {   
  switch (action.type) {
    case ADDPROF:
        return [action.key]; // Use the spread operator to add all items from action.data    
       
            
    default:
        return state;
    }
  };
  
  export default Profilereducer;