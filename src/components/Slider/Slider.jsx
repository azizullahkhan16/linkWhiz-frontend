import { useDispatch } from "react-redux";
import { setopenSlider, setshowloader, setsliderData } from "@/redux/slices/urlslice";
function Slider({ openSlider }) {

  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(setopenSlider(false));
  }
  return (
    <div
      className={`fixed top-0 right-0 w-[44%] h-full bg-white z-50 transform transition-transform duration-500 ${openSlider ? "translate-x-0" : "translate-x-full"
        }`}
    >
      {/* Cross Button */}
      <div className="flex items-center justify-between w-full px-4">
        <p className="font-bungee text-2xl mt-4 flex-grow text-left">Your Recent TinyURLs</p>
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
}

export default Slider;