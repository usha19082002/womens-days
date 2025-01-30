import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from "../Pages/Shoping_cart";
import Home from "../Pages/Home";

// image importing section
import Logo_text2 from '../Assets/Logo_text.png'
import logo from '../Assets/Logo.png'
import footerLogo from '../Assets/Womens Dayz_footer.png'
import payment from '../Assets/img/payment.png'



export default function Footer(params) {
    return (
        <>
        
        <div className="bg-dark p-2 mt-5" >
    <div className="container">
    <div className="row">
        <div className="col-sm-3 mt-5">
            <div className="card border-0 bg-dark ">
        
            <div class="row">
        <div class="col-5 p-0">
            <img src={logo} alt="Logo" class="img-fluid d-flex align-items-center" width={'75%'}/>
        </div>
        <div class="col p-0  mt-2">
        <img src={footerLogo} alt="Other Image" class="img-fluid d-flex align-items-center" width={'75%'}/>

            <img src={Logo_text2} alt="Other Image" class="img-fluid d-flex align-items-center" width={'75%'}/>
        </div>
    </div>
            <div className="" style={{color:'#8f8c8c'}}>
            <p className="me-2">No: 15, Krishna Kandha Building,, SA Garden,Saravanampatti, Coimbatore, Tamil Nadu 641026</p>
            <p>1-202-555-0106<br/>help@shopper.com</p>
            </div>
            </div>

        </div>
        <div className="col-sm-2 mt-4">
            <div className="card border-0 bg-dark">
                <h4 className="mt-3 text-white">SUPPORTS</h4>
                <div className="mt-5" style={{color:'#8f8c8c'}}>
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Size Guide</p>
                <p>Shipping & Returns</p>
                <p>FAQ</p>
                </div>


            </div>

        </div>
        <div className="col-sm-2 mt-4">
            <div className="card border-0 bg-dark">
            <h4 className="mt-3 text-white">SHOP</h4>
            <div  className="mt-5" style={{color:'#8f8c8c'}}>
                <p>Men's Shopping</p>
                <p>Women's Shopping</p>
                <p>Kids's Shopping</p>
                <p>Furniture</p>
                <p>Discounts</p>
                </div>

            </div>

        </div>
        <div className="col-sm-2 mt-4">
            <div className="card border-0 bg-dark">
            <h4 className="mt-3 text-white">COMPANY</h4>
            <div className="mt-5" style={{color:'#8f8c8c'}}>
                <p>About</p>
                <p>Blog</p>
                <p>Affiliate</p>
                <p>Login</p>
                </div>

            </div>

        </div>
        <div className="col-sm-3 mt-4">
            <div className="card border-0 bg-dark">
            <h4 className="mt-3 text-white">SECURE PAYMENTS</h4>
            <img src={payment} width={'80%'} className="mt-5"/>

            </div>

        </div>
    </div>
    <hr/>

  </div>
  </div>

   
        </>
    )
}

<div className="footer-section p-2 mt-5" >
        <div className="container">
        <div className="row">
            <div className="col-sm-3 mt-3">
                <div className="card border-0">
            
                <div className="row">
            <div className="col-5 p-0">
                <img src={logo} width="70" height="70" alt="" />  
            </div>
            
        </div>
                <div className=".head-footer">
                <p className="mt-2 ms-0">D4S Constructions is one of the fastest-growing real estate and infrastructure
                   development companies in the industry. </p>
                </div>
                </div>
    
            </div>
            <div className="col-sm-2 mt-4">
                <div className="card border-0">
                    <h6 className="mt-3 text-white">LINKS</h6>
                    <div className="mt-3">
                    <p>Home</p>
                    <p>Services</p>
                    <p>Pricing</p>
                    <p>Products</p>
                    <p>Contact</p>

                    </div>
    
    
                </div>
    
            </div>
            <div className="col-sm-2 mt-4">
                <div className="card border-0 ">
                <h6 className="mt-3 text-white">ABOUT</h6>
                <div className="mt-3">
                    <p>Pattern</p>
                    <p>Career</p>
                    <p>Prices</p>
                    <p>Community</p>
                    </div>
    
                </div>
    
            </div>
           
        </div>
        <hr/>
    
      </div>
      </div>

