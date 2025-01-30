import { useDispatch } from "react-redux";
import WhistlistNav from "./WhistlistNav";
import { useState } from "react";
import { AddToprofile } from "../Redux/actions/ProfileAction";

export default function Profile_info(params) {

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        displayName:""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    console.log();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddToprofile(formData))
        console.log(formData);
    };

    return(
        <>
             <div className="p-5">
                <div className="row">
                    <div className="col col-md-4  m-2">
                        <WhistlistNav />
                    </div>
                    <div className="col m-2">
                        <form className="container border p-5" onSubmit={handleSubmit}>
                            

                            <div className="row">
                                <div className="col-md-6">
                                    <label>First Name *</label>
                                    <input
                                    required
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>Last Name *</label>
                                    <input
                                    required
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <label>Date of Birth </label>
                            <input
                            required
                                type="text"
                                className="form-control"
                                name="dob"
                                value={formData.dob}
                                onChange={handleInputChange}
                            />

                            <label>Mobile Number</label>
                            <input
                                type="text"
                                className="form-control"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                            />

                            <label>Alternate Mobile Number</label>
                            <input
                            required
                                type="text"
                                className="form-control"
                            />

                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />

                            <label>Display Name *</label>
                            <input
                            required
                                type="text"
                                className="form-control"
                                name="displayName"
                                value={formData.displayName}
                                onChange={handleInputChange}
                            />

                           
                            
                            <button
                                type="submit"
                                className="btn btn-dark rounded-0 mt-4"
                                
                            >
                                Update Profile
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}