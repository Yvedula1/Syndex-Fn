import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import { RiMenu3Fill} from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState,useEffect } from "react";
//will have to fix Nav and Link
const NavigationLinks = [
  { title: "Home", route: "/" },
  { title: "Features", route: "/Features" },
  { title: "Community", route: "/Community" },
  { title: "Blog", route: "/Blog" },
  { title: "News", route: "/News" },
];
function Navbar() {
  const [navStyle, setnavStyle] = useState("100%");
  useEffect(()=>{
    
  },[])
  return (
    <>
      <nav className="flex justify-between py-4 md:py-2 items-center fixed w-full px-[3vw] z-[300] bg-white shadow-sm">
        <Logo />
        <div className="hidden w-full md:relative  justify-end mr-6 md:flex flex-row">
          {NavigationLinks.map(({ title, route }) => {
            console.log(title);
            return (
              <a
                key={title}
                href={route}
                className="mx-4 text-lg text-lightGray hover:text-brandRed md:hover:scale-[1.25] hover:font-semibold my-4"
              >
                {title}
              </a>
            );
          })}
        </div>
        <div className=" min-w-max flex items-center ">
          <Button text={"Register Now"} link='/register' />
          <button
            onClick={() => {
              if (navStyle == "100%") {
                setnavStyle("0%");
              } else {
                setnavStyle("100%");
              }
            }}
          >
            {navStyle =="100%"? (
              <RiMenu3Fill className="text-4xl grid md:hidden ml-4" />
            ) : (
              <RxCross2 className="text-4xl grid md:hidden ml-4" />
            )}
          </button>
        </div>
      </nav>
      <div
        className="fixed right-0 flex flex-col h-[100vh] z-[100] bg-white top-0 w-[50%] pt-[4.3em] md:hidden"
        style={{ transform: `translateX(${navStyle})` }}
      >
        {NavigationLinks.map(({ title, route }) => {
          console.log(title);
          return (
            <a
              key={title}
              href={route}
              className="mx-4 text-lg text-lightGray hover:text-brandRed md:hover:scale-[1.25] hover:font-semibold my-4"
            >
              {title}
            </a>
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
