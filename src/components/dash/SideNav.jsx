import { useState } from "react";
import Logo from "../Logo";
import { NavLink} from "react-router-dom";
import TopNav from "./TopNav"
import {
  FaNewspaper,
  FaCommentAlt,
  FaCompass,
  FaBookmark,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";

function SideNav() {
  const [fold, setfold] = useState(true);
  const iconStyle = `text-2xl ${fold ? "mr-0" : "mr-3"}`;
  const items = [
    {
      link: "Discover",
      name: "Discover",
      icon: <FaCompass className={iconStyle} />,
    },
    {
      link: "publishers",
      name: "Publishers",
      icon: <FaNewspaper className={iconStyle} />,
    },
    {
      link: "Podcasts",
      name: "Podcasts",
      icon: <FaCommentAlt className={iconStyle} />,
    },
    {
      link: "Saved",
      name: "Saved",
      icon: <FaBookmark className={iconStyle} />,
    },
    {
      link: "Settings",
      name: "Settings",
      icon: <FaCog className={iconStyle} />,
    },
    {
      link: "Help",
      name: "Help & Feedback",
      icon: <FaQuestionCircle className={iconStyle} />,
    },
  ];
  return (
    <div>
        <TopNav/>
    <div
      className="bg-white fixed z-[100] flex flex-col left-1 h-[98vh] top-0 items-center backdrop-blur-[40em] shadow-[0_0_5px_#c6c6e6] rounded-[1em] mt-[1vh] "
      style={{
        width: fold ? "4em" : "15em",
        transition:".1s"
      }}
      onMouseEnter={() => {
        setfold(false);
      }}
      onMouseLeave={() => {
        setfold(true);
      }}
    >
      <div className="my-2 bg-white py-3 w-[80%] grid  rounded-xl h-[5em] ">
        {fold? (
          <img className="h-full object-contain" src="https://as2.ftcdn.net/v2/jpg/05/24/07/39/1000_F_524073986_89TuQsJRJZSjPf0l4bPs1dxuX1tHnpzw.jpg" />
        ) : (
          <Logo />
        )}
      </div>
      <ul className="grid w-[90%] px-[2%] bg-[#c9c6c612] rounded-xl py-8">
        {items.map(({ link, name, icon }) => {
          return (
            <NavLink
              key={link}
              to={link}
              className="my-2 w-full hover:font-semibold hover:0px 3px 10px #00000038 rounded-xl hover:shadow-[0px_5px_100px_#00000038] text-[#343131e8] flex hover:text-brandRed hover:scale-[1.01]"
              style={{
                padding: fold ? "1em .5em" : "1em 1em",
                justifyContent: fold ? "center" : "left",
              }}
            >
              {icon}
              {fold ? "" : name}
            </NavLink>
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default SideNav;
