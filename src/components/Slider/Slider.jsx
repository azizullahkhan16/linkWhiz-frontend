import { useDispatch } from "react-redux";
import { setopenSlider, setshowloader, setsliderData } from "@/redux/slices/urlslice";
import { useSelector } from "react-redux";
function Slider({ openSlider }) {
  const { loading, sliderData } = useSelector(state => state.allCart);
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(setopenSlider(false));
  }
  if (sliderData === "My URLs") {
    return (
      <div
        className={`fixed top-0 right-0 w-[44%] h-full bg-white z-50 transform transition-transform duration-500 ${openSlider ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Cross Button */}
        <div className="flex items-center justify-between w-full px-4">
          <p className="font-Montserrat font-bold text-2xl mt-4 flex-grow text-left">Your Recent TinyURLs</p>
          <div
            onClick={(e) => handleClick(e)}
            className="w-10 mt-5 h-10 flex items-center justify-center cursor-pointer bg-gray-700 text-gray-300 rounded-md hover:text-white text-2xl"
          >
            ✖
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-300 w-full mt-10" />
      </div>
    );
  } else if (sliderData === "Sign Up") {
    return (
      <div
        className={`fixed top-0 right-0 w-[35%] h-full bg-white z-50 transform transition-transform duration-500 ${
          openSlider ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cross Button */}
        <div className="flex items-center justify-end w-full px-4">
          <div
            onClick={(e) => handleClick(e)}
            className="w-10 mt-5 h-10 flex items-center justify-center cursor-pointer bg-gray-700 text-gray-300 rounded-md hover:text-white text-2xl"
          >
            ✖
          </div>
        </div>
  
        {/* Horizontal Line */}
        <hr className="border-t border-gray-300 w-full mt-5" />
  
        {/* Sign Up Form */}
        <div className="w-full h-full mt-5 flex flex-col items-center justify-start">
          <p className="font-bungee text-[#087da8] font-medium text-3xl">Tiny URLs</p>
          <p className="text-gray-600">Welcome to TinyURL</p>
  
          {/* Input Fields */}
          <input
            type="text"
            placeholder="Name"
            className="w-[80%] mt-5 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087da8]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[80%] mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087da8]"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[80%] mt-3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#087da8]"
          />
  
          {/* Agreement Text */}
          <p className="w-[80%] mt-3 text-center text-xs text-gray-500">
            By clicking on <span className="font-semibold">“Create Account”</span>, I agree to the 
            <span className="text-[#087da8] cursor-pointer"> Terms of Service</span>, 
            <span className="text-[#087da8] cursor-pointer"> Privacy Policy</span>, and 
            <span className="text-[#087da8] cursor-pointer"> Use of Cookies</span>.
          </p>
  
          {/* Create Account Button */}
          <button className="w-[80%] mt-4 p-2 bg-[#087da8] text-white font-semibold rounded-md hover:bg-[#065c81] transition">
            Create Account
          </button>
  
          {/* Already a user? Log In */}
          <p className="mt-4 text-sm text-gray-600">
            Already a user? <span className="text-[#087da8] font-semibold cursor-pointer">Log In</span>
          </p>
  
          {/* Or register via */}
          <p className="mt-6 text-gray-500 text-sm">Or register via:</p>
  
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-3">
            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
              🌐 {/* Replace with actual social media icon */}
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
              📘 {/* Replace with Facebook icon */}
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
              🔵 {/* Replace with Google icon */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  else if(sliderData === "Sign In"){
    return (
      <div
        className={`fixed top-0 right-0 w-[35%] h-full bg-white z-50 transform transition-transform duration-500 ${openSlider ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Cross Button */}
        <div className="flex items-center justify-end w-full px-4">
          <div
            onClick={(e) => handleClick(e)}
            className="w-10 mt-5 h-10 flex items-center justify-center cursor-pointer bg-gray-700 text-gray-300 rounded-md hover:text-white text-2xl"
          >
            ✖
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-300 w-full mt-5" />
      </div>
    );
  }else{
    return;
  }
}

export default Slider;