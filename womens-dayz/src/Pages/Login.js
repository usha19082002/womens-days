import { getAuth,RecaptchaVerifier,signInWithPhoneNumber  } from 'firebase/auth';
import { useState } from 'react';

export default function Login(params) {

    const [verified, setVerifed] = useState(null)


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
    
      const configureCaptcha = () => {
        // import { getAuth, RecaptchaVerifier } from "firebase/auth";
    
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
          },
          defaultCountry: "IN",
        });
      };
    

    const onSignInSubmit = (e) => {
        if (e) {
          e.preventDefault();
        }
        configureCaptcha();
        const phoneNumber = "+91" + state.mobile;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;
        const auth = getAuth();
    
        signInWithPhoneNumber(auth,phoneNumber, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log("OTP has been sent");
            setVerifed(true)

          })
          .catch((error) => {
            console.log("SMS not sent");
          });
      };
    return (
        <>
           <h3 className="text-center">Login</h3>
            <form className="border w-50 mx-auto p-5 mt-4" onSubmit={onSignInSubmit}>
            <div id="sign-in-button"></div>

                <label className="mb-3">Mobile Number *</label>
                <input type="number" name="mobile" className="form-control rounded-0" required onChange={handleChange}/>
                <label className="mt-3">
                    <input
                        type="checkbox"
                        className="p-2"
                    // checked={this.state.isChecked}
                    // onChange={this.handleCheckboxChange}
                    />
                    <span className="ps-1">Remember me</span>
                </label>
                <button className="d-block btn btn-dark mt-3 rounded-0 w-100" type="submit">Login with OTP</button>
                <p className="mt-3 text-center">Don’t have an Account. <a href="#">Sign up</a> here</p>
            </form>
        </>
    )
}