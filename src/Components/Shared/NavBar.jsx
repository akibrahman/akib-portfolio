import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../../Css/structure.css";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const NavBar = () => {
  const axiosInstance = useAxiosPublic();
  const [isOpen, setIsOpen] = useState(false);
  const handleNavBarOpen = () => {
    setIsOpen(true);
  };
  const handleNavBarClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-[90%] mx-auto relative">
      <div
        className={`h-screen w-full absolute bg-[rgba(0.21,0.21,0.21,0.8)] z-50 ${
          isOpen ? "" : "hidden"
        }`}
      >
        <FaTimes
          onClick={handleNavBarClose}
          className="text-4xl absolute right-10 top-8 text-primary"
        />
        <ul className="flex flex-col items-center justify-center h-full text-2xl gap-8 text-white">
          <li onClick={handleNavBarClose} className="">
            <NavLink to="/" className=" ">
              Home
            </NavLink>
          </li>
          <li onClick={handleNavBarClose} className="">
            <NavLink to="/about" className=" ">
              About
            </NavLink>
          </li>
          <li onClick={handleNavBarClose} className="">
            <NavLink to="/skills" className=" ">
              Skills
            </NavLink>
          </li>
          <li onClick={handleNavBarClose} className="">
            <NavLink to="/portfolio" className=" ">
              Portfolio
            </NavLink>
          </li>
          <li onClick={handleNavBarClose} className="">
            <NavLink to="/contact" className=" ">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <header className="" id="header">
        <nav className="nav container">
          <a href="#" className="nav_logo text-3xl">
            Akib Rahman
          </a>
          {/* <button
            className="bg-primary text-white px-4 py-2 rounded-md duration-300 active:scale-90"
            onClick={async () => {
              await axiosInstance.post("/test");
              toast.success("Success");
            }}
          >
            Test
          </button> */}
          <div className="nav_menu" id="nav-menu">
            <ul className="nav_list ">
              <li className="nav_item">
                <NavLink to="/" className="nav_link text-base">
                  <i className="uil uil-estate nav_icon"></i> Home
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink to="/about" className="nav_link text-base">
                  <i className="uil uil-user nav_icon"></i> About
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink to="/skills" className="nav_link text-base">
                  <i className="uil uil-file-alt nav_icon"></i> Skills
                </NavLink>
              </li>
              {/* <li className="nav_item">
                <a href="#services" className="nav_link text-base">
                  <i className="uil uil-briefcase-alt nav_icon"></i> Services
                </a>
              </li> */}
              <li className="nav_item">
                <NavLink to="/portfolio" className="nav_link text-base">
                  <i className="uil uil-scenery nav_icon"></i> Portfolio
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink to="/contact" className="nav_link text-base">
                  <i className="uil uil-comment-message nav_icon"></i> Contact
                </NavLink>
              </li>
            </ul>
            {/* <i className="uil uil-times nav_close" id="nav-close"></i> */}
            {/* <FaTimes className="text-primary" /> */}
          </div>
          <div className="nav_btns mr-8 mt-2">
            <div
              onClick={handleNavBarOpen}
              className="nav_toggle text-primary"
              id="nav-toggle"
            >
              <FaBars className={`text-3xl ${isOpen ? "hidden" : "block"}`} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
