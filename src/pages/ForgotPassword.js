// ForgotPassword.jsx
import React from 'react';

import hero_png from '../icons/hero.png'
import email_svg from '../icons/email.svg'
import logo_svg from '../icons/logo.svg'
import lock_svg from '../icons/lock.svg'


const ForgotPassword = () => {
  return (
    <div className="font-sans bg-gray-100">
      <div className="flex justify-between min-h-screen">
        <div className="hidden relative w-1/2 bg-center bg-cover lg:block" style={{backgroundImage: `url(${hero_png})` }}>
          <div className="flex absolute bottom-20 justify-center w-full">
            <div className="max-w-md text-center">
              <span className="text-3xl font-bold leading-loose text-gray-900">
                Productivity Tracker
              </span>
              <p className="font-light leading-7 text-gray-500">
                Maximize Your Day: Empower productivity with our intuitive tracker, turning tasks into accomplishments.
              </p>
              <div className="flex justify-center items-center pt-8 space-x-6">
                {/* Add any additional content here */}
              </div>
            </div>
          </div>
        </div>
        <div className="box-content px-8 py-8 flex-1 mx-auto max-w-xl">
          <div className="flex flex-col px-8 pt-3 lg:px-14 xl:px-24">
            <div className="pt-20 pb-6">
              <div className="flex self-end p-0">
                <img src={logo_svg} alt="Logo" className="w-32 absolute top-0 right-0" />
              </div>
              <h1 className="text-3xl font-bold tracking-wide leading-loose">
                Hi, Welcome back!
              </h1>
              <span className="font-light text-gray-800 mb-8">
                Ready, set, login! Your personalized experience awaits.
              </span>

              
              <form action="" className="pt-6 mt-5">
              <div className="mb-0">
            <label for="email" className="font-light">Email address</label>
            <div className="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500">
              <div className="flex justify-center items-center pl-3">
                <img src={email_svg} alt="logo" className="w-5h-5"/>
              </div>
              <div className="flex justify-center items-center pl-0">
                <email_svg className="w-6 h-6 pointer-events-none" />
              </div>
              <input type="text" name="email" id="email" placeholder="Enter your email" className="px-4 py-2 w-full focus:outline-none font-light border-0 focus:ring-0"/>
            </div>
            <div class="pt-8">
            <button type="submit" class="py-4 px-8 w-full text bg-red-500 text-white rounded-lg shadow-lg hover:bg-orange-900 focus:ring-4 focus:ring-red-300 focus:outline-none">
              Reset Password
            </button>
          </div>
          </div>
              </form>
              <div className="pt-4">
                <div className="font-light text-center text-gray-500">
                  Not registered yet?
                  <a href="#" className="font-normal text-teal-500 hover:text-teal-600">
                    Create an Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
