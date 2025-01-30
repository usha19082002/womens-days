import '../Styles/TestimonialCarousel.css'; 

//image importing section 
import team from '../Assets/team.png'
import left_icon from '../Assets/left_icon.png'
import right_icon from '../Assets/right_icon.png'


export default function TestimonialCarousel(params) {


    return (
        <>
            <div id="carouselExample" class="carousel slide" style={{ backgroundColor: '#f5fafa' }}>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <h3 className="text-center mt-3">Doctor Specialists</h3>
                        <div className="text-center ">
                            <img src={team} className="mt-5" />
                        </div>
                        <p className="text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <br /> consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        <h5 className="text-center mt-5">Mark Jevenue</h5>
                        <p className=" text-center mt-2">CEO of Womens Dayz</p>
                    </div>

                    <div class="carousel-item">
                    <h3 className="text-center mt-3">Doctor Specialists</h3>
                        <div className="text-center ">
                            <img src={team} className="mt-5" />
                        </div>
                        <p className="text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <br /> consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        <h5 className="text-center mt-5">Mark Jevenue</h5>
                        <p className=" text-center mt-2">CEO of Womens Dayz</p>                    
                        </div>
                    <div class="carousel-item">
                    <h3 className="text-center mt-3">Doctor Specialists</h3>
                        <div className="text-center ">
                            <img src={team} className="mt-5" />
                        </div>
                        <p className="text-center mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo <br /> consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                        <h5 className="text-center mt-5">Mark Jevenue</h5>
                        <p className=" text-center mt-2">CEO of Womens Dayz</p>                    
                        </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="rounded-circle border p-2" aria-hidden="true"><img src={left_icon} /></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="rounded-circle border p-2" aria-hidden="true"><img src={right_icon} /></span>
                    <span className="visually-hidden ">Next</span>
                </button>
            </div>
        </>
    );
};

