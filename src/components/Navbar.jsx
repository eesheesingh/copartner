// Navbar.jsx
import React, { useState } from "react";
import Login from './SignUp';
import { logo, menu, hamburgerBg, close } from "../assets";
import style from '../style'
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

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
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div
        className={`${style.paddingX} ${
          style.flexCenter
        } fixed top-0 z-50 w-full bg-[#06030E]`}
      >
        <div className={`${style.boxWidth}`}>
          <nav className="w-full flex md:py-5 py-4 justify-between items-center">
            <a href="/">
              <img src={logo} alt="LOGO" className="w-[143px] h-[39px]" />
            </a>

            <ul className="list-none sm:flex hidden justify-center items-center flex-1">
              {menuItems.map((menuItem, index) => (
                <li
                  key={menuItem.id}
                  onClick={() => handleMenuItemClick(menuItem)}
                  className={`font-poppins font-normal cursor-pointer text-[16px]
                    ${active === menuItem.title ? "text-white" : "text-dimWhite"}
                    ${index === menuItems.length - 1 ? "mr-0" : "mr-10"}`}
                >
                  <a href="#hero" style={{ color: active === menuItem.title ? "#FFFFFF" : "#9CA3AF" }}>
                    {menuItem.title}
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ display:"flex", marginLeft: "1rem" }}>
              <button className="md:block hidden text-dimWhite text-[11px] py-1 px-4 ms-8 rounded-[36px] border border-solid border-white border-opacity-60  items-center">
                Refer & Earn
              </button>
              <button className="md:hidden flex text-dimWhite text-[11px] py-2 px-7 ms-8 rounded-md border border-none bg-[#ffffff2d] hover:bg-[#000] transition duration-300 items-center" onClick={() => setShowLogin(true)}>
                Login
              </button>
              <button className="md:block hidden text-dimWhite text-[11px] py-2 px-6 ms-8 rounded-md border bg-[#ffffff2c] border-none border-opacity-60  items-center" onClick={() => setShowLogin(true)}>
                Login
              </button>
            </div>

            
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? undefined : menu}
                alt="Menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              {/* Animated mobile menu */}
              <motion.div
                initial="hidden"
                animate={toggle ? "visible" : "hidden"}
                variants={menuVariants}
                transition={{ duration: 0.3 }}
                className="justify-center items-center fixed top-0 left-0 z-50 w-full bg-[#06030E] h-full p-3 bg-gradient-to-tr"
                style={{
                  backgroundImage: `url(${hamburgerBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "bottom",
                  backgroundSize: "30rem",
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
                <ul className="list-none flex flex-col justify-end items-center gap-4">
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
                            : "text-[#393F48]"
                        }
                        ${index === menuItems.length - 1 ? "mb-0" : "mb-4"}`}
                    >
                      <a href={`#${menuItem.id}`} style={{ color: active === menuItem.title ? "#FFFFFF" : "#9CA3AF" }}>
                        {menuItem.title}
                      </a>
                    </li>
                  ))}

                  {/* Refer & Earn button */}
                  <li className="mt-4">
                    <button className="text-dimWhite text-[11px] py-1 px-4 rounded-[36px] border border-solid border-white border-opacity-60 flex  items-center">
                      Refer & Earn
                    </button>
                  </li>
                </ul>
              </motion.div>
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
