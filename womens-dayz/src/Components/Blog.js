// image importing section
import blog1 from '../Assets/img/blog1.png'
import blog2 from '../Assets/img/blog2.png'
import blog3 from '../Assets/img/blog3.png'

export default function Blog(params) {
    return (
        <>
            <div className="p-5">
            <h2 className="text-center">Our Blogs</h2>
                <div className="row">
                    <div className="col-md-4 rounded-0" >
                    <div className="card p-4 border-0">
                        <img src={blog1} className="card-img-top rounded-0" alt="blog1"/>
                            <div className="card-body p-0 pt-4">
                                <h5 className="card-title">Let's start bring sale on this summer vacation.</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                            </div>
                    </div>
                    </div>
                    <div className="col-md-4 rounded-0" >
                    <div className="card p-4 border-0">
                        <img src={blog2} classNameclassName="card-img-top rounded-0" alt="blog2"/>
                            <div className="card-body p-0 pt-4">
                                <h5 className="card-title">Let's start bring sale on this summer vacation.</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                            </div>
                    </div>
                    </div>
                    <div className="col-md-4 rounded-0" >
                    <div className="card p-4 border-0">
                        <img src={blog3} className="card-img-top rounded-0" alt="blog3"/>
                            <div className="card-body p-0 pt-4">
                                <h5 className="card-title">Let's start bring sale on this summer vacation.</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                            </div>
                    </div>
                    </div>

                </div>
            </div>

        </>
    )
}