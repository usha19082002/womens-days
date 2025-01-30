import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from "../Pages/Shoping_cart";
import Home from "../Pages/Home";
import Shop from '../Pages/Shop';
import Best_seller from '../Pages/Shop_pages/Best_seller';
import Period_care from '../Pages/Shop_pages/Period_care';
import HairCare_skin from '../Pages/Shop_pages/HairCare_skin';
import HealCare_twines from '../Pages/Shop_pages/HealthCare_twines';
import Checkout_page from '../Pages/Checkout_page';
import Order_placed from '../Pages/Order_placed';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Single_product from '../Pages/Single_product';
import Dashboard from '../Pages/Dashboard';
import Whistlist from '../Pages/Whistlist';
import S_Checkout_page from '../Pages/SingleOrder_Checkout';
import Address from './Address';
import Add_address from '../Pages/Add_address';
import Profile_info from './Profile_info';
import Contact_us from './Contact';

//image importing section
import logo from '../Assets/Logo.png'
import Logo_text1 from '../Assets/Womens_Dayz.png'
import Logo_text2 from '../Assets/Logo_text.png'
import search_icon from '../Assets/search_icon.png'
import user_icon from '../Assets/user_icon.png'
import heart_icon from '../Assets/heart.png'
import cart_icon from '../Assets/cart_icon.png'



export default function Header(params) {

    const cart_count = useSelector((state) => state.cart);
    const cart_total = cart_count.length

    const Whist_count = useSelector((state) => state.Whistlist);
    const Whist_total = Whist_count.length
    // console.log(Whist_total)

    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-lg p-2 mainNav shadow sticky-top bg-white">
                    <div className="container-fluid">
                        <img className="m-2 nav-img" src={logo} width={"6%"}/>
                        <div className='nav-item'>
                        <Link className="nav-link active " aria-current="page" to="/"><img src={Logo_text1}  className='nav-imgt1'/></Link>
                        <Link className="nav-link" aria-current="page" to="/"><img src={Logo_text2} className='nav-imgt2'/></Link>
                       
                        </div>
                        
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 mobile_menu" style={{}}>
                        <li className="nav-item ">
                                    <Link className="nav-link fw-semibold " to='whishtlist'><img src={heart_icon} width={25} height={25}/><span className='rounded-circle bg-dark text-white p-1 d-inline-block position-absolute' style={{width:'20px', height:'20px',marginTop:'-10px'}}><p style={{marginTop:'-6px', marginLeft:'3px'}}>{Whist_total}</p></span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold ps-3 " to='cart'><img src={cart_icon} width={25} height={25}/><span className='rounded-circle bg-dark text-white p-1 d-inline-block position-absolute' style={{width:'20px', height:'20px',marginTop:'-10px'}}><p style={{marginTop:'-6px', marginLeft:'3px'}}>{cart_total}</p></span></Link>
                                </li>
                            </ul>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto mobileNav">
                                <li className="nav-item mainNavitem">
                                    <Link className="nav-link active fw-semibold" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item ps-4 mainNavitem">
                                    <Link className="nav-link fw-semibold" to='shop'>Shop</Link>
                                </li>
                                <li className="nav-item ps-4 mainNavitem">
                                    <Link className="nav-link fw-semibold" to='period_care'>Period Care</Link>
                                </li>
                                <li className="nav-item ps-4 mainNavitem">
                                    <Link className="nav-link fw-semibold" to='hair_care'>Hair Skin care</Link>
                                </li>
                                <li className="nav-item ps-4 mainNavitem">
                                    <Link className="nav-link fw-semibold" to='helth_care'>Health Care Twines</Link>
                                </li>
                                <li className="nav-item ps-4 mainNavitem">
                                    <Link className="nav-link fw-semibold" to='contact_us'>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse" id="">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                                <li className="nav-item " >
                                    <Link className="nav-link fw-semibold " to="/"><img src={search_icon} width={25} height={25}/></Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link fw-semibold ps-4 " to='dashboard'><img src={user_icon} width={25} height={25}/></Link>
                                </li>
                                <li className="nav-item ">
                                    <Link className="nav-link fw-semibold ps-4 " to='whishtlist'><img src={heart_icon} width={25} height={25}/><span className='rounded-circle bg-dark text-white p-1 d-inline-block position-absolute' style={{width:'20px', height:'20px',marginTop:'-10px'}}><p style={{marginTop:'-6px', marginLeft:'3px'}}>{Whist_total}</p></span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link fw-semibold ps-4 " to='cart'><img src={cart_icon} width={25} height={25}/><span className='rounded-circle bg-dark text-white p-1 d-inline-block position-absolute' style={{width:'20px', height:'20px',marginTop:'-10px'}}><p style={{marginTop:'-6px', marginLeft:'3px'}}>{cart_total}</p></span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/shop' element={<Best_seller/>} />
                    <Route exact path='/best_sellers' element={<Best_seller/>} />
                    <Route exact path='/period_care' element={<Period_care/>} />
                    <Route exact path='/hair_care' element={<HairCare_skin/>} />
                    <Route exact path='/helth_care' element={<HealCare_twines/>} />
                    <Route exact path='/cart' element={<Cart />} />
                    <Route exact path='/checkout' element={<Checkout_page />} />
                    <Route exact path='/order_placed' element={<Order_placed />} />
                    <Route exact path='/single_product' element={<Single_product/>} />
                    <Route exact path='/dashboard' element={<Dashboard/>} />
                    <Route exact path='/whishtlist' element={<Whistlist/>} />
                    <Route exact path='/single_product' element={<Single_product/>} />
                    <Route exact path='/checkout' element={<Checkout_page/>} />
                    <Route exact path='/order_placed' element={<Order_placed/>} />
                    <Route exact path='/S_checkout' element={<S_Checkout_page/>} />
                    <Route exact path='/address' element={<Address/>} />
                    <Route exact path='/add_address' element={<Add_address/>} />
                    <Route exact path='/profile_info' element={<Profile_info/>} />
                    <Route exact path='/contact_us' element={<Contact_us/>} />

                </Routes>
            </Router>
            

        </>
    )
}