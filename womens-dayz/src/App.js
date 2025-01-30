import { Provider } from 'react-redux';
import Footer from './Components/Footer';
import Header from './Components/Header';
import store from './Redux/store';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import OTP from './Pages/OTP';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import Test from './Components/test';
import './Styles/Responsive.css'

function App() {
  const[number, setNumber] = useState('8072009709')
  return (
    <>
      <Header/>
      <ToastContainer />
      <Footer/>
      
    </>
  );
}

function AppWrapper(params) {
  return(
    <Provider store ={store}>
      <App/>
    </Provider>
  )
  
}
export default AppWrapper;
