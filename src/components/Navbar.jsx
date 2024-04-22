import React, { useEffect, useState } from "react";
import Login from "./SignUp";
import { logo, menu, hamburgerBg, close } from "../assets";
import style from "../style";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "home", title: "Home" },
    { id: "features", title: "Features" },
    { id: "expertise", title: "Expertise" },
    { id: "blogs", title: "Blogs" },
    { id: "contact", title: "Contact Us" },
  ];

  const handleMenuItemClick = (menuItem) => {
    setActive(menuItem.title);
    setToggle(false);

    const targetElement = document.getElementById(menuItem.id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // const handleReferEarnClick = () => {
  //   setToggle(false); // Close the navbar
  // };

  return (
    <>
      <div
        className={`${style.paddingX} ${style.flexCenter} ${
          isScrolled ? style.transparentNavbar : style.scrolledNavbar
        } fixed top-0 z-50 w-full`}
      >
        <div className={`${style.boxWidth}`}>
          <nav className="w-full flex md:py-5 py-4 justify-between items-center">
            <a href="/">
              <img src={logo} alt="LOGO" className="w-[160px] h-[39px]" />
            </a>

            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
              {menuItems.map((menuItem, index) => (
                <li
                  key={menuItem.id}
                  onClick={() => handleMenuItemClick(menuItem)}
                  className={`font-poppins font-normal cursor-pointer text-[16px]
                    ${
                      active === menuItem.title ? "text-white" : "text-dimWhite"
                    }
                    ${index === menuItems.length - 1 ? "mr-0" : "mr-10"}`}
                >
                  { menuItem.id === 'blogs' ? (
                      <Link onClick={scrollToTop} to="/blogs">Blogs</Link>
                    ) : menuItem.id === 'contact' ? (
                      <Link onClick={scrollToTop} to="/contact-us">Contact Us</Link>
                    ) : (
                      <Link
                        to={`/`}
                        style={{
                          color: active === menuItem.title ? "#FFFFFF" : "#c9c9c9",
                        }}
                      >
                        {menuItem.title}
                        
                      </Link>
                      
                    )}
                    
                  </li>
                  
                ))}
                
            </ul>

            <div style={{ display: "flex", marginLeft: "4rem" }}>
              {/* <Link to="refer&earn"> 
              <button onClick={handleReferEarnClick} className="md:block hidden text-dimWhite text-[11px] py-2 px-4 ms-8 rounded-[36px] border border-solid border-white border-opacity-60  items-center">
                Refer & Earn
              </button></Link> */}
             
              {/* <button
                className="md:hidden flex text-black text-[11px] py-2 px-4 ms-8 rounded-md border border-none bg-[#fff] hover:bg-[#000] transition duration-300 items-center"
                onClick={() => setShowLogin(true)}
              >
                Sign Up
              </button>
              <button
                className="md:block hidden text-black text-[15px] py-1 px-6 ms-8 rounded-md border bg-[#fff] border-none border-opacity-60  items-center"
                onClick={() => setShowLogin(true)}
              >
                Sign Up
              </button> */}
            </div>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? undefined : menu}
                alt="Menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              {/* Animated mobile menu */}
              <div
                className={`justify-center items-center fixed top-0 left-0 z-50 w-full bg-[#06030ed8] h-screen p-3 bg-gradient-to-tr ${
                  toggle ? "visible" : "hidden"
                }`}
                style={{
                  backgroundImage: `url(${hamburgerBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "bottom",
                  backgroundSize: "30rem",
                  transition: "opacity 0.3s ease",
                  opacity: toggle ? 1 : 0,
                }}
              >
                {/* Close button */}
                <button
                  className="w-[31px] h-[31px] object-contain cursor-pointer text-dimWhite mt-1 absolute top-4 right-4"
                  onClick={() => setToggle(false)}
                >
                  <img src={close} alt="Close" />
                </button>

                {/* Menu items */}
                <ul className="list-none flex flex-col justify-end items-center gap-4 mt-8">
                  {/* Logo */}
                  <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mb-6">
                    <img width={"200rem"} src={logo} alt="" />
                  </li>

                   {/* Menu items */}
                   {menuItems.map((menuItem, index) => (
                    <li
                      key={menuItem.id}
                      onClick={() => handleMenuItemClick(menuItem)}
                      className={`font-poppins font-normal cursor-pointer text-[16px]
              ${
                active === menuItem.title
                  ? "text-white font-medium"
                  : "text-[#6a7484]"
              }
              ${index === menuItems.length - 1 ? "mb-0" : "mb-4"}`}
                    >
                       { menuItem.id === 'blogs' ? (
                      <Link onClick={scrollToTop} to="/blogs">Blogs</Link>
                    ) : menuItem.id === 'contact' ? (
                      <Link onClick={scrollToTop} to="/contact-us">Contact Us</Link>
                    ) : (
                      <Link
                        to={`/`}
                        style={{
                          color: active === menuItem.title ? "text-white font-medium" : "text-[#9ca3af]",
                        }}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                    </li>
                    
                  ))}

                  {/* Refer & Earn button mobile*/}
                  {/* <li className="mt-4">
                  <Link to="refer&earn">
                      <button onClick={handleReferEarnClick} className="md:hidden text-dimWhite text-[11px] py-2 px-4 rounded-[36px] border border-solid border-white border-opacity-60  items-center">
                        Refer & Earn
                      </button>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Render the Login popup if showLogin is true */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
