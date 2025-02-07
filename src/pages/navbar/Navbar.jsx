import Link from "next/link";
import { useEffect,useState } from "react";
import Navbarcomp from "@/components/Navbarcomponent/Navbarcomp";
import Navbarcomp2 from "@/components/Navbarcomponent/Navbarcomp2";
import Navbarcom3 from "@/components/Navbarcomponent/Navbarcom3";
import ResponsiveNavbar from "@/components/Navbarcomponent/ResponsiveNavbar";
const Navbar = () => {
    const [isMobile, setisMobile] = useState(false);
    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth < 920) {
                setisMobile(true);
            } else {
                setisMobile(false);
            }
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);
    return (
        <div className="relative w-full z-50">
            {
                isMobile ? <ResponsiveNavbar /> :
                    <div className="hidden md:block">
                        <Navbarcom3 />
                        <Navbarcomp2 />
                        <Navbarcomp />
                    </div>
            }

        </div>
    );
};

export default Navbar;
