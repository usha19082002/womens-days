import { Link } from 'react-router-dom'
import Style from '../Styles/Card.css'

// image importing section
import rightArrow_icon from '../Assets/rightArro_icon.png'



export default function Cards(params) {
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-4">
                    <div className="card text-dark card-1 rounded-0 crd">
                        <div className="card-body p-5">
                            <h4 className="card-title">Period Care</h4>
                            <h6 className='card-title'>8685 Items</h6>
                            <Link to="shop" className="nav-link p-1" style={{ flex: '1' }}>
                                <button className="btn btn-transparent btn-outline-dark mt-5 rounded-0 hbtn" style={{ display: 'flex', alignItems: 'center' }}>
                                    Browse Items
                                    <img src={rightArrow_icon} alt="arrowlogo" className='p-1' />
                                </button>  </Link>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-dark card-2 rounded-0 crd">
                        <div className="card-body p-5">
                            <h4 className="card-title">Skin Care</h4>
                            <h6 className='card-title'>8685 Items</h6>
                            <Link to="shop" className="nav-link p-1" style={{ flex: '1' }}>
                                <button className="btn btn-transparent btn-outline-dark mt-5 rounded-0 hbtn" style={{ display: 'flex', alignItems: 'center' }}>
                                    Browse Items
                                    <img src={rightArrow_icon} alt="arrowlogo" className='p-1' />
                                </button> 
                             </Link>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-dark card-3 rounded-0 crd">
                        <div className="card-body p-5">
                            <h4 className="card-title">Health Care</h4>
                            <h6 className='card-title'>32 Items</h6>
                            <Link to="shop" className="nav-link p-1" style={{ flex: '1' }}>
                                <button className="btn btn-transparent btn-outline-dark mt-5 rounded-0 hbtn" style={{ display: 'flex', alignItems: 'center' }}>
                                    Browse Items
                                    <img src={rightArrow_icon} alt="arrowlogo" className='p-1' />
                                </button>  </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}