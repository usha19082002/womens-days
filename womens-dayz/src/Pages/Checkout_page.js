import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import CartBill from "../Components/CartBill";
import { addToOrder } from "../Redux/actions/OrderAction";

//images importins section
import downLeft from '../Assets/downLeft.png'


export default function Checkout_page(params) {

    const [selectedAddress, setSelectedAddress] = useState(null);
    const [CouponOption, setCouponOption] = useState('0');

    console.log(CouponOption)


    const handleRadioChange = (event) => {
        setSelectedAddress(parseInt(event.target.value, 10));
    };


  const handleCouponOption = (event) => {
    setCouponOption(event.target.value);
  };
    const dispatch = useDispatch()

    const [price, setPrice] = useState()


    const [qty, setQty] = useState(1);

    const data = useSelector((state) => (state.Address))

    const data2 = useSelector((state) => state.cart);
    console.log(data2)



    const addOrder = () => {
        // alert('order triggered')
        dispatch(addToOrder(data2,CouponOption))
    }


    useEffect(() => {
        const totalPrice = data2.reduce((acc, product) => {
            const productPriceWithOffer = Math.abs(Math.floor((product.offer / 100) * product.price - product.price) * product.quantity);

            if (productPriceWithOffer === 0) {
                const productPriceWithoutOffer = parseFloat(product.price) * product.quantity;
                return acc + productPriceWithoutOffer;
            } else {
                return acc + productPriceWithOffer;
            }
        }, 0);

        setPrice(totalPrice);
    }, [data2]);



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
                        <h4>Order Items</h4>


                        {data2.map((item, index) => (
                            <CartItem index={index} item={item} />
                        )
                        )}
                        <hr />
                        <div className="p-2">
                            <h5>Coupon Code:</h5>
                            {/* <input type="text" value="" className="form-control rounded-0 w-75 d-inline" /> */}
                            <select id="dropdown" className="form-control rounded-0 w-75 d-inline"  value={CouponOption} onChange={(e)=>handleCouponOption(e)}>
                                <option value="0">Select Coupon Code </option>
                                <option value="200">TUY200Y </option>
                                <option value="100">TUY100Y</option>
                                <option value="300">TUY300Y </option>
                            </select>
                            <button className="btn btn-dark w-25 rounded-0" onClick={()=>setPrice(price-CouponOption)}>Apply</button>
                        </div>
                        <div class="card border-dark rounded-0">
                            {
                                data2.map((item) => (
                                    <CartBill item={item} />
                                ))
                            }
                            <hr />
                            <div class="card-body d-flex p-4">
                                <p class="card-text w-75">
                                    Total
                                </p>
                                <h6 class="card-text w-25 ms-5 mt-3">
                                    ₹ <b className="text-success">{price}</b>
                                </h6>
                            </div>
                        </div>
                        <button className="btn btn-dark rounded-0 w-100 p-3 mt-2"><Link className="text-decoration-none text-white" to="/order_placed" onClick={addOrder}>Place order</Link> </button>
                        <p className="text-dark mt-2"><img src={downLeft} />Continue Shoping</p>
                    </div>
                </div>
            </div>
        </>
    )
}