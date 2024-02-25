import Logo from "../components/Logo";

//logos here
import { FaTwitter, FaLinkedinIn, FaInstagram ,FaYoutube,FaDribbble} from "react-icons/fa";
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
      href: "fb.com",
    },
    {
      tag: (
        <FaDribbble className="text-2xl text-white mx-2 transition-all hover:scale-105 hover:text-white" />
      ),
      href: "fb.com",
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
      href: "fb.com",
    },
    {
      tag: (
        <FaYoutube className="text-2xl text-white mx-2 transition-all hover:scale-105 hover:text-white" />
      ),
      href: "fb.com",
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
                <a href={href} target="_blank" className="text-white">
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

{
  /* <div className="lg:w-[25%]    grid">
  <h1 className="text-2xl font-[PoppinsBold] text-white ">
    Intersted in Learning more? Schedule a consultation
  </h1>
  <a
    href="/"
    className="border-[2px] border-white text-brandRed py-4 px-4 rounded-full hover:bg-brandRed hover:text-white decoration-[none] h-fit text-center w-fit"
  >
    Send us a message
  </a>
</div>
<div className="text-white border-l-[2px] border-brandRed px-4 mt-2">
  <h1 className="text-xl font-black">Contact Us</h1>
  <p className="text-lg font-bold text-brandRed">address</p>
  <a
    className=""
    href="https://maps.apple.com/?address=3400%20Prospect%20St%20NW,%20Washington,%20DC%20%2020007,%20United%20States&ll=38.905594,-77.068192&q=3400%20Prospect%20St%20NW&t=r"
    target="_blank"
  >
    3400 Prospect St NW, Washington, DC 20007
  </a>
  <h2 className="text-white text-lg font-black">
    Hours of Operation:{"  "}
    <span className="font-light">9:00 am - 6:00 pm</span>
  </h2>
  <p className="text-white">(Monday - Fridays,Except US holiday)</p>
  <div className="flex justify-between mt-4">
    <h1 className="font-black">
      Office<br></br>{" "}
      <a
        href="tel: +1 202-903-7470"
        className="font-light text-brandRed"
      >
        +1 202-903-7470{" "}
      </a>
    </h1>
    <h1 className="ml-4 font-black">
      Email <br></br>
      <a
        href="mailto:engage@tantvstudios.com"
        className="font-light text-brandRed"
      >
        engage@tantvstudios.com{" "}
      </a>
    </h1>
  </div>
</div> */
}
