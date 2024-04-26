import Logo from "../components/Logo";

//logos here
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
/**
 * @param {FooterQuery & {shop: HeaderQuery['shop']}}
 */
function Footer() {
  return (
    <footer className="bg-[#292D32] ">
      <FooterMenu />
    </footer>
  );
}
export default Footer;
/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
 * }}
 */
function FooterMenu() {
  const company = ["About us", "Blog", "Contact us", "Pricing", "Testimonials"];
  const support = [
    "Help center",
    "Terms of service",
    "Legal",
    "Privacy policy",
    "Status",
  ];
  const socials = [
    {
      tag: (
        <FaInstagram className="text-2xl text-white mx-2 transition-all hover:scale-105 hover:text-white" />
      ),
      href: "insta.com",
    },
    {
      tag: (
        <FaDribbble className="text-2xl text-white mx-2 transition-all hover:scale-105 hover:text-white" />
      ),
      href: "dr.com",
    },
    {
      tag: (
        <FaLinkedinIn className="text-2xl text-white mx-2 transition-all hover:scale-105 hover:text-white" />
      ),
      href: "https://www.linkedin.com/company/tantvstudios",
    },
    {
      tag: (
        <FaTwitter className="text-2xl text-white mx-2 transition-all hover:scale-105 hover:text-white" />
      ),
      href: "tw.com",
    },
    {
      tag: (
        <FaYoutube className="text-2xl text-white mx-2 transition-all hover:scale-105 hover:text-white" />
      ),
      href: "yt.com",
    },
  ];
  return (
    <nav
      className=" flex flex-col px-2 md:px-4 items-center md:py-12"
      role="navigation"
    >
      {/* <Logo /> */}
      <div className="flex-wrap flex mt-4 h-[100%] mx-auto md:w-[90%] justify-center md:flex-nowrap">
        <div className=" md:mx-4 mt-4">
          <p className="text-white text-lg w-max">
            Copyright © 2024 Syndex. <br></br>All rights reserved
          </p>
          <div className=" flex mt-4">
            {socials.map(({ tag, href }) => {
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  className="text-white"
                >
                  {tag}
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex justify-evenly w-full mt-4">
          <div className=" flex flex-col md:mr-4 nd:mx-12">
            <h1 className="font-bold text-white text-xl mb-4 md:mb-6">
              Company
            </h1>
            {company.map((item) => {
              return (
                <a
                  end
                  key={item}
                  prefetch="intent"
                  to={item}
                  className="my-2 text-white"
                >
                  {item}
                </a>
              );
            })}
          </div>
          <div className=" flex flex-col md:mr-4">
            <h1 className="font-bold text-white text-xl mb-4 md:mb-6">
              Support
            </h1>
            {support.map((item) => {
              return (
                <a
                  end
                  key={item}
                  prefetch="intent"
                  to={item}
                  className="my-2 text-white"
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
