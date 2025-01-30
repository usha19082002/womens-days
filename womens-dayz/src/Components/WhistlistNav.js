import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"; 

// image importing section
import profileImg from '../Assets/img/profile.png'
import d_myorders from '../Assets/d_myorders.png'
import d_whistlist from '../Assets/d_whistlist.png'
import d_address from '../Assets/d_address.png'
import d_profile from '../Assets/d_profile.png'
import d_logout from '../Assets/d_logout.png'

export default function WhistlistNav(params) {
    const data = useSelector((state) => state.Profile);

    return (
        <div className="border">
            <div className="text-center p-4 pb-0">
                <img src={profileImg} alt="profile" />
                {data.map((item) => (
                    <div key={item.id}>
                        <h6>{item.firstName} {item.lastName}</h6>
                        <p>{item.mobileNumber}</p>
                    </div>
                ))}
            </div>

            <div>
                <ul className="list-group">
                    <h6 className="list-group-item bg-secondary text-white text-center p-2 rounded-0"><span className="ps-2">Dashboard Navigation</span></h6>
                    <li className="list-group-item nav-item p-3 ps-5">
                        <img src={d_myorders} alt="profile" />
                        <span className="ps-2">
                            <NavLink to="/dashboard" className="text-decoration-none text-danger" activeClassName="active-link">My Orders</NavLink>
                        </span>
                    </li>
                    <li className="list-group-item nav-item p-3 ps-5">
                        <img src={d_whistlist} alt="whistlist" />
                        <span className="ps-2">
                            <NavLink to="/whishtlist" className="text-decoration-none text-dark" activeClassName="active-link">Whistlist</NavLink>
                        </span>
                    </li>
                    <li className="list-group-item nav-item p-3 ps-5">
                        <img src={d_address}  alt="address" />
                        <span className="ps-2">
                            <NavLink to="/address" className="text-decoration-none text-dark" activeClassName="active-link">Address</NavLink>
                        </span>
                    </li>
                    <li className="list-group-item nav-item p-3 ps-5">
                        <img src={d_profile}  alt="profile" />
                        <span className="ps-2">
                            <NavLink to="/profile_info" className="text-decoration-none text-dark" activeClassName="active-link">Profile info</NavLink>
                        </span>
                    </li>
                    <li className="list-group-item nav-item p-3 ps-5">
                        <img src={d_logout} alt="profile" />
                        <span className="ps-2">
                            <NavLink className="text-decoration-none text-dark" activeClassName="active-link">Logout</NavLink>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
