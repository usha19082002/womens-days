import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import CartBill from "../Components/CartBill";

//images importins section
import downLeft from '../Assets/downLeft.png'
import { addToOrder } from "../Redux/actions/OrderAction";
import { update_qty } from "../Redux/actions/CartAction";
import { addtoSingle, single_update_qty } from "../Redux/actions/SingleAction";

export default function S_Checkout_page(params) {

    const dispatch = useDispatch()

    const data = useSelector((state) => (state.Address))
    const [selectedAddress, setSelectedAddress] = useState(null);

    const handleRadioChange = (event) => {
        setSelectedAddress(parseInt(event.target.value, 10)); // Parse the value as an integer
    };


    // const data = useSelector((state)=>(state));
    // console.log(data)

    const data2 = useSelector((state)=>(state.Single))
    console.log(data2)

    const data2Array = [data2]

console.log(data2Array);
    

    const [qty,setQty] = useState(data2.quantity);

    if(qty == ''){
        return setQty(1)
    }

    const QtyChange = (e,id,qty) => {
        const newValue = e.target.value;
        if (newValue <=0 ){
            return newValue =1
          }
          dispatch(addtoSingle(id, newValue))

        setQty(newValue);
      };
    
      const addOrder = (e) => {
        e.stopPropagation()
        // alert('order triggered')
        dispatch(addToOrder(data2Array))
    }
   
    return (
        <>
            <div className="container">
                <h2 className="text-center p-3">Checkout</h2>
                <hr />
                <div className="row p-5">
                    <div className="col p-5">
                        <h4>Billing & Shipping Details</h4>


                        {
                            data.map((item, index) => (
                                <>

                                    <div className="form-check">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="option1"
                                            value={index}
                                            checked={selectedAddress === index}
                                            onChange={handleRadioChange}
                                        />
                                        <label className="form-check-label w-100 shadow mb-2" htmlFor="option1">
                                            <div className="card border-0 p-3 ">
                                                <p className="card-img-overlay" style={{ marginLeft: '90%', marginTop: '-10px' }}><span className="">x</span></p>

                                                <h6>{item.firstName} {item.lastName}</h6>
                                                <p>{item.city}</p>
                                                <p>{item.email}</p>
                                                <p>{item.mobileNumber}</p>
                                            </div>

                                        </label>
                                    </div>
                                </>
                            ))
                        }

                        <hr />
                        <button className="btn btn-outline-dark rounded-0 w-100 mt-2 p-3"><Link to="/add_address" className="text-decoration-none">Add New Address</Link></button>

                    </div>


                    <div className="col p-5">
                    <h4>Order Items(1)</h4>

                         
                           
                                <div className="card border-0">
                            <p className="card-img-overlay" style={{ marginLeft: '90%', marginTop: '-10px' }}><span className="">x</span></p>

                            <div className="row p-2">
                                <div className="col-md-4">
                                    <img src={data2.img} width={155} height={200} className="img-fluid" />
                                </div>
                                <div className="col-md-8 mt-4">
                                    <div className="text-container">
                                        <h4>{data2.name}</h4>
                                        <p>Size : XXL</p>
                                        <h5>₹<span className="text-danger">{Math.abs((Math.floor(data2.offer/100 * data2.price)-data2.price) * qty)}</span></h5>
                                        <input type="number" value={qty} name="qty" id="qty" min="1" className="form-control w-25" onChange={(e)=> QtyChange(e,data2.id)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                       
                        <hr />
                        <div class="card border-dark rounded-0">
                        <div class="card-body d-flex p-4">
            <p class="card-text w-75">
                
                {data2.name}
            </p>
            <p class="card-text w-25 ms-5 mt-3">
                
                ₹{Math.abs((Math.floor(data2.offer/100 * data2.price)-data2.price) * qty)}
            </p>
            <p></p>
        </div>
                            <hr />
                            <hr />
                            <div class="card-body d-flex p-4">
                                <p class="card-text w-75">
                                    Total
                                </p>
                                <p class="card-text w-25 ms-5 mt-3">
                                ₹{Math.abs((Math.floor(data2.offer/100 * data2.price)-data2.price) * qty)}
                                </p>
                            </div>
                        </div>
                        <button className="btn btn-dark rounded-0 w-100 p-3 mt-2"><Link className="text-decoration-none text-white" to="/order_placed" onClick={(e)=>addOrder(e)}>Place order</Link> </button>
                        <p className="text-dark mt-2"><img src={downLeft}  alt="arrow"/>Continue Shoping</p>
                    </div>
                </div>
            </div>
        </>
    )
}