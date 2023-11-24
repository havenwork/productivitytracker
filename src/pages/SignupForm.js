import React, {useEffect, useState} from "react";
import validation from "../helpers/validation";

import hero_png from '../icons/hero.png'
import email_svg from '../icons/email.svg'
import logo_svg from '../icons/logo.svg'
import lock_svg from '../icons/lock.svg'

import BottomState from '../components/BottomState'
import Connections from '../components/Connections'
import Dock from '../components/Dock'
import LeftPane from '../components/LeftPane'
import RigntPane from '../components/RightPane'
import Stat from '../components/Stat'
import TopState from '../components/TopStats'


const SignupForm = ({submitForm}) => {
    const[values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) =>{
       setValues({
        ...values,
        [event.target.name]: event.target.value,
       });
    };
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    }; 

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    }, [errors,dataIsCorrect,submitForm]);
  return (
    <div className=" font-sans bg-gray-100">
  <div className="flex justify-between min-h-screen">
    <div className="hidden relative w-1/2  bg-center bg-cover lg:block" style={{backgroundImage: `url(${hero_png})`}}>
      <div className="flex absolute bottom-20 justify-center w-full">
        <div className="max-w-md text-center">
          <span class="text-3xl font-bold leading-loose text-gray-900">
            Productivity Tracker
          </span>
          <p className="font-light leading-7 text-gray-500">
            Maximize Your Day: Empower productivity with our intuitive tracker, turning tasks into accomplishments.
          </p>
        </div>
      </div>
    </div>
    <div class="box-content px-8 py-8 flex-1 mx-auto max-w-xl">
      <div className="flex flex-col px-8 pt-3 lg:px-14 xl:px-24 ">
        <div className="pt-20 pb-6 ">
          <div className="flex self-end p-0 ">
            <img src={logo_svg} alt="Logo" className="w-32 absolute top-0 right-0 "/>
          </div>
          <h1 className="text-3xl font-bold tracking-wide leading-loose">
            Get Started!
          </h1>
          <span className="font-light text-gray-800 mb-8">
            Activate your access: Sign up for a seamless experience.
          </span>

        
        <div className="flex justify-between items-center pt-6">
          <hr className="w-full border-gray-400" />
          <span className="px-4 font-light tracking-wider text-gray-500">or</span>
          <hr className="w-full border-gray-400" />
        </div>
        <form action="">
          <div className="pt-6">
            <label for="email" className="font-light">Full name</label>
            <div className="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500">
              <div className="flex justify-center items-center pl-6">
              <email_svg className="w-6 h-6 pointer-events-none" />
              </div>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your name"
                className="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0"
              />
            </div>
          </div>
          </form>
          <div action="" className="pt-6 mt-5 ">
            <div className="mb-0">
              <label for="email" class="font-light">Email address</label>
              <div class="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500">
                <div class="flex justify-center items-center pl-3">
                  <img src={email_svg} alt="logo" class="w-5 h-5"/>
                </div>
                <div class="flex justify-center items-center pl-0">
                  <email_svg className="w-6 h-6 pointer-events-none" />
                </div>
                <input type="text" name="email" id="email" placeholder="Enter yor email" class="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0"/>
              </div>
            </div>
            <form action="" className="pt-6 mt-5 ">
            <div className="mb-0">
              <label for="password" class="font-light">Password</label>
              <div className="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500">
                <div className="flex justify-center items-center pl-6">
                <lock_svg className="w-6 h-6 pointer-events-none" />
                </div>
                <input type="password" name="password" id="password" placeholder="Enter your password" class="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0"/>
              </div>
              </div>
          
          <div className="flex justify-between items-center pt-3">
            <div className="flex items-center">
              <input type="checkbox" name="remember" id="remember" class="w-5 h-5 text-orange-500 bg-white rounded border border-gray-400 focus:outline-none focus:ring-orange-500"/>
              <label for="remember" className="pl-4 font-light text-gray-900">
                Remember me
              </label>
            </div>
            <a href="#" class="text-teal-500 hover:text-teal-600"> Forgot password</a>
          </div>
          <div class="pt-8">
            <button type="submit" class="py-4 px-8 w-full text bg-red-500 text-white rounded-lg shadow-lg hover:bg-orange-900 focus:ring-4 focus:ring-red-300 focus:outline-none">
              Sign in
            </button>
          </div>
        </form>
        <div class="pt-4">
          <div class="font-light text-center text-gray-500">
            Not registered yet?
            <a href="#" class="font-normal text-teal-500 hover:text-teal-600">
              Create an Account
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
    );  
};

export default SignupForm;