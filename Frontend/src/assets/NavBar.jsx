import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  // const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const [enable, setEnable] = useState(false);
  let location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <>
      <nav
        className="navbar flex justify-start  items-center p-auto fixed top-0 left-0 right-0 shadow-md w-full bg-gray-200/80  backdrop-blur-md lg:bg-white lg:justify-start "
        style={{ position: "relative" }}
      >
        <div className="flex justify-center items-center lg:order-2">
          <div
            onClick={() => setEnable(!enable)}
            className="hamburger z-20 inline-block p-4  cursor-pointer lg:hidden"
          >
            <div
              className={
                enable
                  ? "line transition-all  h-1 w-7 my-1 rotate-45  bg-black"
                  : "line transition-all  h-1 w-6 my-1 bg-black"
              }
            ></div>
            <div
              className={
                enable
                  ? "line transition-all  h-1 w-7 my-1 -translate-y-[8px] -rotate-45 bg-black"
                  : "line transition-all  h-1 w-6 my-1 bg-black"
              }
            ></div>
            <div
              className={enable ? "hidden" : "line  h-1 w-6 my-1 bg-black"}
            ></div>
          </div>
          {/* <div className="search lg:hidden">
            <img src="/search.svg" className="w-6" alt="" />
          </div> */}
        </div>
        <div className="logo text-center lg:order-1 flex">
          <Link to="/">
            <div
              className={
                enable
                  ? "hidden"
                  : "p-4  w-32 font-sans flex items-center lg:mt-[-5px] justify-center "
              }
            >
              <img src="/icons8-canvas-student-32.png" alt="" />
              <div className={`${location.pathname === "/" ? "myFocus" : ""}`}>
                MyNotes
              </div>
            </div>
          </Link>
          <div
            className={
              enable
                ? "features absolute pb-10  items-center space-y-4  w-auto justify-center h-fit  bg-gray-500 text-white flex flex-col inset-0 transition-all  -translate-x-196  "
                : "features absolute lg:static w-fit lg:w-auto bg-gray-200 lg:bg-white inset-0 lg:flex lg:mx-4  lg:space-x-4  -translate-x-96 lg:translate-x-0 lg:justify-center lg:p-[1rem] "
            }
          >
            <a href="/">
              <div
                className={`mt-5 lg:hidden font-semibold w-32 font-sans flex items-center ${
                  location.pathname === "/about" ? "myFocus" : ""
                }`}
              >
                <img src="/icons8-canvas-student-32.png" alt="" />
                MyNotes
              </div>
            </a>
            <a href="/about">
              <div
                className={`fitem cursor-pointer hover:underline hover:underline-offset-4  ${
                  location.pathname === "/about" ? "myFocus" : ""
                }`}
                tabIndex={"1"}
              >
                About
              </div>
            </a>
            <a href="/entertainment">
              <div className="fitem cursor-pointer hover:underline hover:underline-offset-4 active:text-blue-500">
                Entertainment
              </div>
            </a>
            {/* <a href="/general">
                <div className="fitem cursor-pointer hover:underline hover:underline-offset-4 ">
                  General
                </div>
              </a> */}
            <a href="/health">
              <div className="fitem cursor-pointer hover:underline hover:underline-offset-4 active:text-blue-500">
                Health
              </div>
            </a>
            <a href="/science">
              <div className="fitem cursor-pointer hover:underline hover:underline-offset-4 active:text-blue-500">
                Science
              </div>
            </a>
            <a href="/sports">
              <div className="fitem cursor-pointer hover:underline hover:underline-offset-4 active:text-blue-500">
                Sports
              </div>
            </a>
            <a href="/technology">
              <div className="fitem cursor-pointer hover:underline hover:underline-offset-4 active:text-blue-500">
                Technology
              </div>
            </a>
          </div>
        </div>
        <div></div>
        {/* <div className="cart text-center lg:order-3 flex">
          <div className="search hidden lg:flex ">
            All Microsoft
            <img src="/search.svg" className="w-10 px-2 mx-2" alt="" />
          </div>
          <div className="flex">
            <img
              src="/iconmonstr-shopping-cart-thin.svg"
              className="w-5 mx-2"
              alt=""
            />
            <img src="/account.svg" className="w-6 mx-2" alt="" />
          </div>
        </div> */}
      </nav>
    </>
  );
};

export default NavBar;
