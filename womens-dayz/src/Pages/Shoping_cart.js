import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../Redux/store";
import {  useEffect, useState } from "react";
import Header from "../Components/Header";
import { cart_count } from "../Redux/actions/CartAction";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import CartBill from "../Components/CartBill";

//images importins section
import downLeft from '../Assets/downLeft.png'


function Cart() {

    
    const data = useSelector((state) => state.cart);
    console.log(data)

    const cartdispatch = useDispatch();


    const [products, setProducts] = useState([])
    const [price,setPrice] = useState()

   
  useEffect(() => {
  const totalPrice = data.reduce((acc, product) => {
    const productPrice = Math.abs((Math.floor((product.offer / 100) * product.price - product.price) * product.quantity));

    if (productPrice === 0) {
      const s = parseFloat(product.price) * product.quantity;
      return acc + s;
    } else {
      return acc + productPrice;
    }
  }, 0);

  setPrice(totalPrice);
  cartdispatch(cart_count(data.length));
}, [data]);

  
  return (
        <>
            <div className="container">
                <h2 className="text-center p-3">Your Cart Items</h2>
                <hr />
                <div className="row p-5">
                    <div className="col p-5">
                    {data.map((item, index) => (
                            <CartItem key={item.id} item={item} index={index}/>
                        )
                        )}
                        <hr />
                        <button className="btn btn-outline-dark rounded-0 w-50 p-3 mt-5"> Update Cart</button>

                    </div>

                    

                    <div className="col p-5">
                        <div className="card border-dark rounded-0">
                            
                               {
                                data.map((item)=>(
                                  <CartBill item={item}/>
                                ))
                               }
                            <hr />
                            <div className="card-body d-flex p-4">
                                <p className="card-text w-75">
                                    Total
                                </p>
                                <h6 className="card-text w-25 ms-5">
                                    ₹ <b className="text-success">{price}</b>
                                </h6>
                            </div>
                        </div>
                        <button className="btn btn-dark rounded-0 w-100 p-3 mt-2"><Link className="text-decoration-none text-white" to="/checkout">Proceed to Checkout</Link> </button>
                        <p className="text-dark mt-2"><img src={downLeft} />Continue Shoping</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}


function CartWrapper() {
        
    return(
      <Provider store ={store}>
        <Cart/>
      </Provider>
    )
    
  }
  export default CartWrapper;