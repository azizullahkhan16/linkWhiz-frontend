import { useDispatch } from "react-redux";
import { setopenSlider,setshowloader,setsliderData } from "@/redux/slices/urlslice";
function Slider({ openSlider }) {

  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(setopenSlider(false));
  }
  return (
    <div
      className={`fixed top-0 right-0 w-[48%] h-full bg-gray-700 z-50 transform transition-transform duration-500 ${
        openSlider ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Cross Button */}
      <div onClick={(e) => handleClick(e)} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center cursor-pointer bg-blue-700 text-gray-300 rounded-full hover:text-white text-2xl">
        ✖
      </div>
    </div>

  );
}

export default Slider;