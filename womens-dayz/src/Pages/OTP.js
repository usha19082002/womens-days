import { useState } from "react";

export default function OTP(params) {
    const [state, setState] = useState({
    mobile: '',
    otp: '',
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setState({
        ...state,
        [name]: value,
      });
    };

    const onSubmitOTP = (e) => {
    if (e) {
      e.preventDefault();
    }
    const code = state.otp;
    console.log(code);
    window.confirmationResult.confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("User is verified");
      })
      .catch((error) => {
        console.log("User couldn't sign in (bad verification code?)");
      });
  };

    return (
        <>
            <h3 className="text-center">Enter OTP</h3>
            <form className="border w-50 mx-auto p-5 mt-4" onSubmit={onSubmitOTP}>
                <label className="mb-3">Enter OTP *</label>
                <input  type="number" name="otp" className="form-control rounded-0"  required onChange={handleChange}/>
                
                <button className="d-block btn btn-dark mt-3 rounded-0 w-100" type="submit">Verify OTP</button>
                <p className="mt-3 text-center"><a href="#">Resend OTP</a> (00:23)</p>
            </form>
        </>
    )
}