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
        <div className="hidden relative w-1/2 bg-center bg-cover lg:block" style={{backgroundImage: `url(hero_png)` }}>
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

              <div className="flex justify-between items-center pt-6">
                <hr className="w-full border-gray-400" />
                <span className="px-4 font-light tracking-wider text-gray-500">or</span>
                <hr className="w-full border-gray-400" />
              </div>
              <form action="" className="pt-6 mt-5">
                {/* Rest of the form code */}
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
