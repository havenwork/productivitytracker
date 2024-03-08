import hero_png from '../icons/hero.png'
import logo_svg from '../icons/logo.svg'
import lock_svg from '../icons/lock.svg'
const ResetPage = () => {
  return (
  <div className=" font-sans bg-gray-100">
  <div className="flex justify-between min-h-screen">
    <div className="hidden relative w-1/2  bg-center bg-cover lg:block" style={{backgroundImage: `url(${hero_png})`}}>
      <div className="flex absolute bottom-20 justify-center w-full">
        <div className="max-w-md text-center">
          <span className="text-3xl font-bold leading-loose text-gray-900">
          Reset your password!
          </span>
          <p className="font-light leading-7 text-gray-500">
          Optimize your online security by reconfiguring your password settings regularly.
          </p>
          
        </div>
      </div>
    </div>
    <div className="box-content px-8 py-8 flex-1 mx-auto max-w-xl">
      <div className="flex flex-col px-8 pt-3 lg:px-14 xl:px-24 ">
        <div className="pt-20 pb-6 ">
          <div className="flex self-end p-0 ">
            <img src={logo_svg} alt="Logo" className="w-32 absolute top-0 right-0 "/>
          </div>
          <h1 className="text-3xl font-bold tracking-wide leading-loose">
            Reset Password!
          </h1>
          <span className="font-light text-gray-800 mb-8">
            Ready, set, login! Your personalized experience awaits.
          </span>

        
        <form action="" className="pt-6 mt-5">
          <div className="mb-0">
            <label for="email" className="font-light">New Password</label>
            <div className="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500">
              <div className="flex justify-center items-center pl-3">
                <img src={lock_svg} alt="logo" className="w-5h-5"/>
              </div>
              <div className="flex justify-center items-center pl-0">
                <email_svg className="w-6 h-6 pointer-events-none" />
              </div>
              <input type="text" name="email" id="email" placeholder="New Password" className="px-4 py-2 w-full focus:outline-none font-light border-0 focus:ring-0"/>
            </div>
          </div>
          <div className="pt-6">
            <label for="password" className="font-light">Reenter Password</label>
            <div className="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-gray-400 transition-all focus-within:shadow-lg focus-within:border-orange-500">
            <div className="flex justify-center items-center pl-3">
                <img src={lock_svg} alt="logo" className="w-5h-5"/>
              </div>  
              <div className="flex justify-center items-center pl-0">
              <lock_svg className="w-6 h-6 pointer-events-none" />
              </div>
              <input type="password" name="password" id="password" placeholder="Reenter password" className="px-4 py-2 w-full focus:outline-none font-light border-0 focus:ring-0"/>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4">
            <div className="flex items-center">
              <input type="checkbox" name="remember" id="remember" className="w-5 h-5 text-orange-500 bg-white rounded border border-gray-400 focus:outline-none focus:ring-orange-500"/>
              <label for="remember" className="pl-4 font-light text-gray-900">
                Remember me
              </label>
            </div>

          </div>
          <div className="pt-8">
            <button type="submit" className="py-4 px-8 w-full text bg-red-500 text-white rounded-lg shadow-lg hover:bg-orange-900 focus:ring-4 focus:ring-red-300 focus:outline-none">
             Reset
            </button>
          </div>
        </form>
        
      </div>
    </div>
  </div>
</div>
  </div>
  );
};

export default ResetPage;
