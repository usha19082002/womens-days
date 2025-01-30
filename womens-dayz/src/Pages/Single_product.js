import Carousel from "react-multi-carousel";
import Products from "../Components/Product";
import { allProducts, periodCare, responsive } from "../Data/Products_datas";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Redux/actions/CartAction";
import { addtoCheckout } from "../Redux/actions/CheckoutAction";
import { useState } from "react";
import { addtoSingle } from "../Redux/actions/SingleAction";
import { toast } from 'react-toastify';
import { addWhistlist } from "../Redux/actions/WhistlistAction";

// images importing section 
import star1 from '../Assets/star1.png'
import star5 from '../Assets/star5.png'
import delivery from '../Assets/delivery.png'
import eye from '../Assets/eye.png'
import benifit1 from '../Assets/img/benifit1.png'
import benifit2 from '../Assets/img/benifit2.png'
import benifit3 from '../Assets/img/benifit3.png'
import benifit4 from '../Assets/img/benifit4.png'
import ingredients1 from '../Assets/img/products/ingredients1.png'
import ingredients2 from '../Assets/img/products/ingredients2.png'
import ingredients3 from '../Assets/img/products/ingredients3.png'
import ingredients4 from '../Assets/img/products/ingredients4.png'
import period3 from '../Assets/img/products/period3.png'



export default function Single_product(params) {

    const [img, setImg] = useState(0);
    const [qty, setQty] = useState(0)

    const dispatch = useDispatch();

    const data = useSelector((state) => state.Single);
    const cartData = useSelector((state)=>state.cart)

    const whistData = useSelector((state)=>state.Whistlist)



    const images = data && data.previews; 
    const previewsArray = images ? Object.values(images) : [];
    // console.log(previewsArray)

    const updateImg = (e, id) => {
        e.stopPropagation();
        setImg(id)
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
        const itemInCart = whistData.find((o) => o.id === id);

        if (itemInCart) {
            toast.error('Item is already in the whistlist', {
                position: 'bottom-right',
                autoClose: 2000,
                theme: "colored"

            });
        } else {
            dispatch(addWhistlist(id, true));
            toast.success('Item added to the whistlist', {
                position: 'bottom-right',
                autoClose: 3000,
                theme: "colored"

            });
        }


    }

    const Checkout = (e, id) => {
        e.stopPropagation()
        var quantity;
        if (qty == 1 || qty == 0) {
            return quantity = 1
        } else {
            quantity = qty
        }
        dispatch(addtoSingle(id, Number(quantity)))

    }

    const PeriodCare = allProducts.map((item) => {
        if (item.category == 'period_care') {
            return <Products
                name={item.name}
                price={item.price}
                img={item.img}
                unqid={item.id}
                off={item.off}
            />
        }
    })
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="">
                            <img src={previewsArray[img]} width={"474px"} height={"509px"}  className="sprod-img"/>
                        </div>

                        <div className="mt-2">
                            {
                                previewsArray.map((item, id) => ((
                                    <img src={item} width={"75px"} height={"75px"} alt="star" className="ms-3 spre-img" onClick={(e) => updateImg(e, id)} />
                                )
                                ))
                            }
                        </div>
                    </div>

                    <div className="col">
                        <p className="text-success  p-1 ps-4" style={{ width: 150, backgroundColor: '#E8FDEB' }}>Women’s Suit</p>
                        <h3>{data.name}</h3>
                        <div className="mb-3">
                            <img src={star1} alt="star" className="ps-1" />
                            <img src={star1} alt="star" className="ps-1" />
                            <img src={star1} alt="star" className="ps-1" />
                            <img src={star1} alt="star" className="ps-1" />
                            <img src={star5} alt="star" className="ps-1" />
                            <span className="ps-3 mt-5">
                                (412 Reviews)
                            </span>
                        </div>
                        {/* <h2>₹ {data.price} </h2> */}
                        <h2>₹ {Math.abs(Math.floor((data.offer / 100) * data.price - data.price))}</h2>
                        <p className="sprod-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div>
                            <img src={delivery} alt="dele" /><span> :  Products are usually delivered in 3-7 days.</span><br />
                            <img src={eye}  alt="eye"/><span> :  46 watching this item.</span>
                        </div>
                        <p className="pt-2">Size : XL</p>
                        <div>
                            <button className="btn btn-outline-dark">S</button>
                            <button className="btn btn-outline-dark ms-2">M</button>
                            <button className="btn btn-outline-dark ms-2">L</button>
                            <button className="btn btn-outline-dark ms-2">XL</button>
                            <button className="btn btn-outline-dark ms-2">XXL</button>

                        </div>
                        <div className=" mt-3">
                            <input type="number" required className="form-control w-25 d-inline border border-dark rounded-0" onChange={(e) => setQty(e.target.value)} defaultValue={"1"} />
                            <button className="btn btn-dark ms-2 rounded-0 w-50 scart-btn" onClick={(e) => addToCart(e, data.id)}>Add To Cart</button>
                            <button className="btn btn-secondary ms-2 rounded-0 " onClick={(e)=>addToWhistlist(e,data.id)}>Whislist</button>
                            <button className="btn btn-dark d-block mt-3 w-100 rounded-0"><Link className="text-decoration-none text-white" to="/S_checkout" onClick={(e) => Checkout(e, data.id)}>Buy Now</Link></button>

                        </div>
                    </div>

                </div>
                <div>

                    <nav className="m-5 ">
                        <div className="nav nav-underline  w-50 mx-auto" id="nav-tab" role="tablist">
                            <button className="nav-link text-dark active mx-auto" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">ADDITIONAL INFORMATION</button>
                            <button className="nav-link text-dark  mx-auto" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">REVIEWS</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show  active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div>
                                <h4 className="text-center mt-5">Benefits of our Napkins</h4>
                                <div className="row mb-5">
                                    <div className="col-6 col-md-4 mt-4">
                                        <div className="card">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img src={benifit1} className="d-inline" width={'70px'} />
                                                <div className="p-3 mt-3 srview-txt">
                                                    <h6>Period Care Napkins</h6>
                                                    <p>Stimulates free moving</p>
                                                </div>
                                            </div>
                                            <p className="ps-5 pe-5 srview-txt">Napkins are good absorbable and Easy wearable with Low cost.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 mt-4">
                                        <div className="card">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img src={benifit2} className="d-inline" width={'70px'} />
                                                <div className="p-3 mt-3 srview-txt">
                                                    <h6>Period Care Napkins</h6>
                                                    <p>Stimulates free moving</p>
                                                </div>
                                            </div>
                                            <p className="ps-5 pe-5 srview-txt">Napkins are good absorbable and Easy wearable with Low cost.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 mt-4">
                                        <div className="card">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img src={benifit4} className="d-inline" width={'70px'} />
                                                <div className="p-3 mt-3 srview-txt">
                                                    <h6>Period Care Napkins</h6>
                                                    <p>Stimulates free moving</p>
                                                </div>
                                            </div>
                                            <p className="ps-5 pe-5 srview-txt">Napkins are good absorbable and Easy wearable with Low cost.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 mt-4">
                                        <div className="card">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img src={benifit2} className="d-inline" width={'70px'} />
                                                <div className="p-3 mt-3 srview-txt">
                                                    <h6>Period Care Napkins</h6>
                                                    <p>Stimulates free moving</p>
                                                </div>
                                            </div>
                                            <p className="ps-5 pe-5 srview-txt">Napkins are good absorbable and Easy wearable with Low cost.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 mt-4">
                                        <div className="card">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img src={benifit4} className="d-inline" width={'70px'} />
                                                <div className="p-3 mt-3 srview-txt">
                                                    <h6>Period Care Napkins</h6>
                                                    <p>Stimulates free moving</p>
                                                </div>
                                            </div>
                                            <p className="ps-5 pe-5 srview-txt">Napkins are good absorbable and Easy wearable with Low cost.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 mt-4">
                                        <div className="card">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img src={benifit3} className="d-inline" width={'70px'} />
                                                <div className="p-3 mt-3 srview-txt">
                                                    <h6>Period Care Napkins</h6>
                                                    <p>Stimulates free moving</p>
                                                </div>
                                            </div>
                                            <p className="ps-5 pe-5 srview-txt">Napkins are good absorbable and Easy wearable with Low cost.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="keying">
                                <h4 className="text-center mt-5 ">Key Ingredients</h4>
                                <div className="row">
                                    <div className="col-6 col-md-6 mt-4">
                                        <div className="card border-0">
                                            <div className="d-flex justify-content-center">
                                                <img src={ingredients1} className="d-inline" width={'241px'} height={'250px'} />
                                                <div className="p-4 mt-4">
                                                    <h6>Easy Absorbable</h6>
                                                    <p> It Contains vitamins e and essential fatty acids; helps to nourish the scalp, improve hair condition, and soothe dry, irritated scalp.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-4">
                                        <div className="card border-0">
                                            <div className="d-flex justify-content-center">
                                                <img src={ingredients2} className="d-inline" width={'241px'} height={'250px'} />
                                                <div className="p-4 mt-4">
                                                    <h6>Easy Absorbable</h6>
                                                    <p> It Contains vitamins e and essential fatty acids; helps to nourish the scalp, improve hair condition, and soothe dry, irritated scalp.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-4">
                                        <div className="card border-0">
                                            <div className="d-flex justify-content-center">
                                                <img src={ingredients3} className="d-inline" width={'241px'} height={'250px'} />
                                                <div className="p-4 mt-4">
                                                    <h6>Easy Absorbable</h6>
                                                    <p> It Contains vitamins e and essential fatty acids; helps to nourish the scalp, improve hair condition, and soothe dry, irritated scalp.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-4">
                                        <div className="card border-0">
                                            <div className="d-flex justify-content-center">
                                                <img src={ingredients4} className="d-inline" width={'241px'} height={'250px'} />
                                                <div className="p-4 mt-4">
                                                    <h6>Easy Absorbable</h6>
                                                    <p> It Contains vitamins e and essential fatty acids; helps to nourish the scalp, improve hair condition, and soothe dry, irritated scalp.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div class="tab-pane fade " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                            <div className="card border-0">
                                <div className="d-flex p-3">
                                    <img src={benifit3} width={'120'} height={'120'} alt="img" />
                                    <div className="ps-5">
                                        <h6>Surya Joseph</h6>
                                        <p>30 jun 2020</p>
                                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                        </p>
                                    </div>
                                </div><hr />
                                <div className="d-flex p-3">
                                    <img src={benifit4} width={'120'} height={'120'} alt="img" />
                                    <div className="ps-5">
                                        <h6>Daniel Rajdesh</h6>
                                        <p>30 jun 2020</p>
                                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="container-fluid mt-5 info" style={{ backgroundColor: '#f5fafa' }}>
                <h3 className="text-center pt-5">Why you would love our Period Care Napkins</h3>
                <div className="row container mx-auto p-2">
                    <div className="col  col-md-5 p-5 text-center ">
                        <img src={period3}/>
                    </div>
                    <div className="col p-5 mt-5 info">
                        <ul>
                            <li>
                                01 :Infused with black seed oil extract that has potent antioxidant and antimicrobial properties which helps to boost blood circulation in the scalp and improve hair health.
                            </li>
                            <li>
                                01 :Infused with black seed oil extract that has potent antioxidant and antimicrobial properties which helps to boost blood circulation in the scalp and improve hair health.
                            </li>
                            <li>
                                01 :Infused with black seed oil extract that has potent antioxidant and antimicrobial properties which helps to boost blood circulation in the scalp and improve hair health.
                            </li>
                            <li>
                                01 :Infused with black seed oil extract that has potent antioxidant and antimicrobial properties which helps to boost blood circulation in the scalp and improve hair health.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <h3>Disclaimer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="text-center mt-5">
                <h3 className="mb-5">Recommended Products</h3>
                <Carousel responsive={responsive}>
                    {PeriodCare}
                </Carousel>
            </div>
            {/* <div className="p-5">
                <div className="mt-5" style={{ marginLeft: '25%' }}>
                    <img src="/Assets/Images/ishop1.png" />
                    <h6 style={{ marginLeft: '5%', marginTop: '-4.5%' }}>admin@womensdays.com</h6>
                    <p style={{ marginLeft: '5%', marginTop: '-0.5%' }}>Have query? Mail us.</p>
                </div>
                <div style={{ marginLeft: '55%', marginTop: '%' }}>
                    <img src="/Assets/Images/ishop2.png" />
                    <h6 style={{ marginLeft: '7%', marginTop: '-4.5%' }}>+91 79000 85000 </h6>
                    <p style={{ marginLeft: '7%', marginTop: '-0.5%' }}>24/7 available</p>
                </div>
            </div> */}
        </>
    )
}