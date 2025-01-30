import { Link } from "react-router-dom";
import WhistlistNav from "./WhistlistNav";
import { useDispatch, useSelector } from "react-redux";
import { RemoveAddress } from "../Redux/actions/AddressAction";
import {toast} from 'react-toastify'

//image importing section
import edit_icon from '../Assets/edit_icon.png';
import close_icon from '../Assets/close_icon.png';

export default function Address(params) {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.Address)
    console.log(data)

    const removeAddress = (e,id) =>{
        e.preventDefault();
        dispatch(RemoveAddress(id))
        toast.success('Address Removed', {
            position: 'bottom-right',
            autoClose: 2000,
            theme: "colored"

        });
    }

    return (
        <div className="p-5">
            <div className="row">
                <div className="col col-md-4 m-2">
                    <WhistlistNav />
                </div>
                <div className="col m-2">
                    <div className="row border">
                        {
                            data.map((item,index) => (
                                <div className="col col-md-5 m-4 border">
                                    <div className="mt-2">
                                        <h5 className="p-3 d-inline w-25">{item.addressType}</h5>
                                        <p className="w-25 d-inline p-4 m-5"><img src={edit_icon} className="border rounded-circle" style={{cursor:"pointer"}} width={'16px'} height={'16px'}  onClick={(e)=>removeAddress(e,index)}/></p>
                                        <p className="w-25 d-inline"><img src={close_icon} className="border rounded-circle" style={{cursor:"pointer"}} width={'12px'} height={'12px'} onClick={(e)=>removeAddress(e,index)}/></p>
                                    </div>
                                    <hr />
                                    <div className="ps-3 pb-2">
                                        <h6>{item.firstName} {item.lastName}</h6>
                                        <p>{item.address1}<br />
                                            {item.city}, {item.state} {item.postalCode}<br />
                                            {item.country}</p>
                                        <h6 className="">Email: <span>{item.email}</span></h6>
                                        <h6 className="">Mobile: <span>{item.mobileNumber}</span></h6>

                                    </div>
                                </div>
                            ))
                        }
                       
                    </div>
                    <Link to="/add_address">
                    <button className="btn btn-outline-dark w-75 rounded-0 ms-5 p-2 m-3"> Add Address</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}