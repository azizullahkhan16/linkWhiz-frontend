import Homecomponent from "@/components/Homecomponent";
import Navbar from "../navbar/Navbar";
import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import Slider from "@/components/Slider/Slider";
const Home = () => {
  const {loading,openSlider} = useSelector(state => state.allCart)
  return (
    <div>
      <Navbar />
      <Homecomponent />
      {
        openSlider && <Slider />
      }
    </div>
  );
};

export default Home; 
