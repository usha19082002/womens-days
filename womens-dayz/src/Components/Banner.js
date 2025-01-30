import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//imgae importing section
import banner from '../Assets/img/banner.png'
import rightArrow_icon from '../Assets/rightArro_icon.png'

export default function Banner(props) {
    return (
        <>

            {
                props.type == 'home_page' ? (
                    <div className="position-relative">
                        <img src={banner} width={"100%"} height="auto" alt='banner' />
                        <div className="position-absolute top-50 translate-middle text-dark bannerRed" style={{ left: '30%' }}>
                            <p className="text-danger">Winter Collection</p>
                            <p className="banner_heading">New Winter <br />Collections 2022</p>
                            <p className='text-dark'><i>There's nothing like trend</i></p>
                            <Link to="shop" className="nav-link " style={{ flex: '1' }}>
                                <button className="btn btn-outline-dark rounded-0 p-2 bannerBtn " style={{ display: 'flex', alignItems: 'center' }}>
                                    Shop Now  <img src={rightArrow_icon} alt="arrowlogo"  className='p-1'/>
                                </button>  
                                </Link>   
                        </div>
                    </div>
                ) : (
                    <div className="position-relative">
                        <img src={banner} width={"100%"} height="auto" alt='banner' />
                        <div className="position-absolute translate-middle text-dark" style={{ left: '45%', top: '45%' }}>
                            <h1 className="text-center">Shop</h1>
                            <nav>
                            <ul className='navbar-nav text-center list-group-horizontal mt-4'>
                                <li className='nav-item '>
                                    <Link href="/best_sellers" className='nav-link ps-4 mx-2 active' to="/best_sellers"><b>Best Seller</b></Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href="/best_sellers" className='nav-link ps-4 mx-2' to="/period_care"><b>Period Care</b></Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href="/best_sellers" className='nav-link ps-4 mx-2' to="/hair_care"><b>Hair Care</b></Link>
                                </li>
                                <li className='nav-item'>
                                    <Link href="/best_sellers" className='nav-link ps-4 mx-2' to="/helth_care"><b>Health Care</b></Link>
                                </li>
                            </ul>
                            </nav>
                        </div>
                    </div>
                )
            }





        </>
    )
}