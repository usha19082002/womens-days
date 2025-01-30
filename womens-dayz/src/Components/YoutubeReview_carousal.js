import '../Styles/Carousal.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// image importing section
import youtube1 from '../Assets/youtube1.png'
import youtube2 from '../Assets/youtube2.png'
import youtube3 from '../Assets/youtube3.png'
import rightArrow_icon from '../Assets/rightArro_icon.png'



export default function Review_carousal() {
    const Device_responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <>

            <div className='p-5'>
            <h2 className='text-center'>Youtube Review</h2>
                <Carousel responsive={Device_responsive}>
                    <div className="card border-0 product-card p-3" style={{ }}>
                        <img src={youtube1} className="" style={{ width: '287px', height: '241px' }} />
                    </div>

                    <div className="card border-0 product-card p-3" style={{ width: '287px' }}>
                        <iframe style={{ width: '287px', height: '241px' }} src="https://www.youtube.com/embed/tgbNymZ7vqY">
                        </iframe>                   
                     </div>

                    <div className="card border-0 product-card p-3" style={{ width: '287px' }}>
                        <img src={youtube2} className="" style={{ width: '287px', height: '241px' }} />
                    </div>

                    <div className="card border-0 product-card p-3" style={{ width: '287px' }}>
                        <img src={youtube3} className="" style={{ width: '287px', height: '241px' }} />
                    </div>

                    <div className="card border-0 product-card p-3" style={{ width: '287px' }}>
                        <img src={youtube1} className="" style={{ width: '287px', height: '241px' }} />
                    </div>
                </Carousel>
                <div className='text-center p-3'>
                    <button className="btn btn-outline-dark rounded-0">Explore More<img src={rightArrow_icon} alt="arrowlogo" /></button>
                </div>
            </div>
        </>
    );

}
