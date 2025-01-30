import { useState } from "react";
import WhistlistNav from "../Components/WhistlistNav";
import { useDispatch } from "react-redux";
import { AddToaddress } from "../Redux/actions/AddressAction";
import { toast } from 'react-toastify';


export default function Add_address(params) {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        addressType: "",
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        address1: "",
        address2: "",
        country: "",
        state: "",
        city: "",
        postalCode: "",
        mobileNumber: "",
        landmark: "",
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
        dispatch(AddToaddress(formData))
        toast.success('Address Added Successfully', {
            position: 'bottom-right',
            autoClose: 2000,
            theme: "colored"

        });
        setFormData({
            addressType: "",
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        address1: "",
        address2: "",
        country: "",
        state: "",
        city: "",
        postalCode: "",
        mobileNumber: "",
        landmark: "",   
        });
         
        console.log(formData);
    };

    
    return (
        <>
            <div className="p-5">
                <div className="row">
                    <div className="col col-md-4 m-2">
                        <WhistlistNav />
                    </div>
                    <br/>
                    <div className="col  m-2">
                        <form className="container border p-5" onSubmit={handleSubmit}>
                            <label>Address Type</label>
                            <input
                                type="text"
                                className="form-control"
                                name="addressType"
                                value={formData.addressType}
                                onChange={handleInputChange}
                            />
                            <p className="text-success">
                                Eg: Office Address, Home Address, etc.
                            </p>

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

                            <label>Email *</label>
                            <input
                            required
                                type="text"
                                className="form-control"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />

                            <label>Company</label>
                            <input
                                type="text"
                                className="form-control"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                            />

                            <label>Address 1 *</label>
                            <input
                            required
                                type="text"
                                className="form-control"
                                name="address1"
                                value={formData.address1}
                                onChange={handleInputChange}
                            />

                            <label>Address 2</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address2"
                                value={formData.address2}
                                onChange={handleInputChange}
                            />

                            <label>Country *</label>
                            <input
                            required
                                type="text"
                                className="form-control"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                            />

                            <label>State *</label>
                            <input
                            required
                                type="text"
                                className="form-control"
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                            />

                            <div className="row">
                                <div className="col-md-6">
                                    <label>City/Town *</label>
                                    <input
                                    required
                                        type="text"
                                        className="form-control"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                <label>ZIP/Posta *l</label>
                            <input
                            required
                                type="text"
                                className="form-control"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleInputChange}
                            />
                                </div>
                            </div>

                            <label>Mobile number *</label>
                            <input
                            required
                                type="number"
                                className="form-control"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                            />

                            <label>Landmark</label>
                            <input
                                type="text"
                                className="form-control"
                                name="landmark"
                                value={formData.landmark}
                                onChange={handleInputChange}
                            />
                            <button
                                type="submit"
                                className="btn btn-outline-dark rounded-0 w-100 mt-4"
                                
                            >
                                Add Address
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
