import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Redux/actions/CartAction";
import { addWhistlist, removeWhistlist } from "../Redux/actions/WhistlistAction";
import { Link } from "react-router-dom";
import { addtoSingle } from "../Redux/actions/SingleAction";
import { toast } from 'react-toastify';
import { allProducts } from "../Data/Products_datas";

// image importing secttion
import gereenHeart from '../Assets/greenHeart.png'
import heart from '../Assets/heart.png'
import cart from '../Assets/addCart_icon.png'



export default function Products(props) {



    const cartData = useSelector((state) => state.cart)
    const wisht = useSelector((state) => state.Whistlist)
    console.log(wisht)



    const [iswhist, setIswhist] = useState(false)

    const dispatch = useDispatch();


    const addToSinglePage = (e, id, qty = 1) => {
        e.stopPropagation();
        dispatch(addtoSingle(id, qty))
        // alert('clicked')
    }

    const addToCart = (e, id) => {
        e.stopPropagation();
        const itemInCart = cartData.find((o) => o.id === id);

        if (itemInCart) {
            toast.error('Item is already in the cart', {
                position: 'bottom-right',
                autoClose: 2000,
                theme: "colored"

            });
        } else {
            dispatch(add(id));

            toast.success('Item added to the cart', {
                position: 'bottom-right',
                autoClose: 3000,
                theme: "colored"

            });
        }
    }

    const addToWhistlist = (e, id) => {
        e.stopPropagation();
        dispatch(addWhistlist(id, true));

    }

    const removeFromWhistlist = (e, id) => {
        e.stopPropagation();
        dispatch(removeWhistlist(id, false));
    }



    return (
        <div className="card border-0  product-card p-3 bg-body-tertiary" style={{ width: '310px' }}>
            <Link className="text-decoration-none text-dark" to="/single_product" onClick={(e) => addToSinglePage(e, props.unqid)}><img src={props.img} className="prod-img" style={{ width: 'auto', height: '369px' }} /></Link>
            <p className="card-img-overlay w-50" style={{ marginLeft: '0px', marginTop: '25px', zIndex: 1 }}
            ><b className=" p-1 text-white" style={{
                display: props.off <= 0 ? 'none' : 'visible',
                backgroundColor: props.off < 26 ? 'green' : (props.off >= 26 && props.off <= 50) ? 'orange' : '#F02681'
            }}>
                    -{props.off}%
                </b>
            </p>
            {
                props.wstatus ? (
                    <img
                        src={gereenHeart}
                        className="card-img-overlay rounded-circle p-2 bg-white"
                        style={{ marginLeft: '72%', marginTop: '37px', zIndex: 1 }}
                        onClick={(e) => {
                            removeFromWhistlist(e, props.unqid)
                        }}
                    />
                ) : (
                    <img
                        src={heart}
                        className="card-img-overlay rounded-circle p-2 bg-white"
                        style={{ marginLeft: '72%', marginTop: '37px', zIndex: 1 }}
                        onClick={(e) => {
                            addToWhistlist(e, props.unqid)
                        }}
                    />
                )
            }
            <button className='cart-btn btn btn-dark rounded-0' onClick={(e) => addToCart(e, props.unqid)}><img src={cart} width='25px' /> Add To Cart</button>
            <h5 className="text-center prod-txt mt-3"><Link className="text-decoration-none text-dark" to="/single_product" onClick={(e) => addToSinglePage(e, props.unqid)}>{props.name}</Link></h5>
            {
                props.off > 0 ?
                    (
                        <h4 className="text-center ms-4 prod-txt"><span style={{ textDecoration: 'line-through' }} className="fs-5">₹{props.price}
                        </span> <span className="prod-txt">₹{props.price - Math.floor((props.off / 100) * props.price)}</span></h4>
                    ) :
                    (
                        <h4 className="text-center ms-4 prod-txt">₹{props.price}</h4>
                    )
            }
        </div>
    )
}