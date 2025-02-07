import Homecomponent from "@/components/Homecomponent";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import Slider from "@/components/Slider/Slider";

const Home = () => {
  const { loading, openSlider } = useSelector((state) => state.allCart);

  return (
    <div className="relative">
      <Navbar />
      {/* Slider with transition effect */}
      <Slider openSlider={openSlider} />
      
      <div className="scroll-smooth bg-[#031f39] h-[1020px] relative z-10">
        <Homecomponent />
      </div>
    </div>
  );
};

export default Home;
