import { Link } from "react-router-dom";
//images importing section
import heart_success from '../Assets/img/heart_success.png'

export default function Order_placed(params) {
    return(
        <>
            <div className="text-center  mx-auto p-5">
                <img src={heart_success} className="border rounded-circle p-4" style={{backgroundColor:'#E8FDEB'}} alt="success-icon"/>
                <h2>Order Placed !!!</h2>
                <p className="w-50 mx-auto">Your order #965471202 has been placed. Your order details are shown for your personal accont.</p>
                <button className="btn btn-dark rounded-0 p-3 mt-2"> <Link to="/dashboard" >Go to Dashboard</Link></button>
            </div>
        </>
    )
}