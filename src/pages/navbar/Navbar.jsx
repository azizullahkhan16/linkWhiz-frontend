import Link from "next/link";
import Navbarcomp from "@/components/Navbarcomponent/Navbarcomp";
import Navbarcomp2 from "@/components/Navbarcomponent/Navbarcomp2";
import Navbarcom3 from "@/components/Navbarcomponent/Navbarcom3";
const Navbar = () => {
    return (
        <div className="relative w-full z-50">
            <Navbarcom3 />
            <Navbarcomp2 />
            <Navbarcomp />
        </div>
    );
};

export default Navbar;
