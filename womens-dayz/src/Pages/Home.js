import Banner from '../Components/Banner'
import Blog from '../Components/Blog'
import Cards from '../Components/Cards'
import Instagram_grid from '../Components/Instagram_grid'
import Offer_duration from '../Components/Offer_duration'
import TestimonialCarousel from '../Components/Testimonial'
import Review_carousal from '../Components/YoutubeReview_carousal'
import Carousel from 'react-multi-carousel';
import { allProducts, responsive } from '../Data/Products_datas'

import '../Styles/Banner.css'
import Products from '../Components/Product'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//images importing section
import rightArrow_icon from '../Assets/rightArro_icon.png'

export default function Home(params) {

    const wisht = useSelector((state) => state.Whistlist)
    console.log(wisht)

    const allProds = allProducts.map((item) => {
        const itemInWisht = wisht.find((o) => o.id === item.id);
        return <Products
            name={item.name}
            price={item.price}
            img={item.img}
            unqid={item.id}
            off={item.off}
            wstatus={itemInWisht ? true : false}
        />
    })

    const BestSellers = allProducts.map((item) => {
        const itemInWisht = wisht.find((o) => o.id === item.id);
        if (item.category == 'best_sellers') {
            return <Products
                name={item.name}
                price={item.price}
                img={item.img}
                unqid={item.id}
                off={item.off}
                wstatus={itemInWisht ? true : false}
            />
        }
    })

    const PeriodCare = allProducts.map((item) => {
        const itemInWisht = wisht.find((o) => o.id === item.id);
        if (item.category == 'period_care') {
            return <Products
                name={item.name}
                price={item.price}
                img={item.img}
                unqid={item.id}
                off={item.off}
                wstatus={itemInWisht ? true : false}
            />
        }
    })

    const HealthCare = allProducts.map((item) => {
        const itemInWisht = wisht.find((o) => o.id === item.id);
        if (item.category == 'health_care') {
            return <Products
                name={item.name}
                price={item.price}
                img={item.img}
                unqid={item.id}
                off={item.off}
                wstatus={itemInWisht ? true : false}
            />
        }
    })


    return (
        <>

            <Banner type="home_page" />
            <Cards />
            <Offer_duration />
            <div className='text-center ps-5 pe-5 width'>
                <Carousel responsive={responsive} >
                    {allProds}
                </Carousel>
                <Link to="shop"><button className="btn btn-outline-dark rounded-0 p-3 mb-3 mt-4 buttons">Explore More <img src={rightArrow_icon}/></button></Link>

                <hr />
            </div>
            <div className='text-center ps-5 pe-5 width'>
                <h2 className='mb-4 mt-4'>Best Seller</h2>
                <Carousel responsive={responsive}>
                    {BestSellers}
                </Carousel>
                <Link to="shop"><button className="btn btn-outline-dark rounded-0 p-3 mb-5 mt-4 buttons">Explore More <img src={rightArrow_icon} alt="arrowlogo" /></button></Link>
                <hr />
            </div>

            <div className='text-center ps-5 pe-5 width'>
                <h2 className='mb-4 mt-4'>Period Care</h2>
                <Carousel responsive={responsive}>
                    {PeriodCare}
                </Carousel>
                <Link to="shop"><button className="btn btn-outline-dark rounded-0 p-3 mb-5 mt-4 buttons">Explore More <img src={rightArrow_icon} alt="arrowlogo" /></button></Link>
                <hr />
            </div>

            <div className='text-center ps-5 pe-5 width'>
                <h2 className='mb-4 mt-4'>Hair Skin Care</h2>
                <Carousel responsive={responsive}>
                    {allProds}
                </Carousel>
                <Link to="shop"><button className="btn btn-outline-dark rounded-0 p-3 mb-5 mt-4 buttons">Explore More <img src={rightArrow_icon} alt="arrowlogo" /></button></Link>
                <hr />
            </div>

            <div className='text-center ps-5 pe-5 width'>
                <h2 className='mb-4 mt-4'>Health Care Twines</h2>
                <Carousel responsive={responsive}>
                    {HealthCare}
                </Carousel>
                <Link to="shop"><button className="btn btn-outline-dark rounded-0 p-3 mb-5 mt-4 buttons">Explore More <img src={rightArrow_icon} alt="arrowlogo" /></button></Link>
            </div>

            <TestimonialCarousel />
            <Review_carousal />
            <Blog />
            <h4 className='text-center' style={{ color: '#EE1C47' }}>@mahak_17</h4>
            <h2 className='text-center'>From Instagram</h2>
            <Instagram_grid />

        </>
    )
}