import Hero from "../components/Hero";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
import { PiUsersThreeDuotone, PiBuildingsDuotone } from "react-icons/pi";
import { RiAdvertisementLine } from "react-icons/ri";
import Footer from "../components/Footer";
import phoneApp from "../assets/phone-.png";
function Landing() {
  const iconStyle =
    "text-4xl mx-auto bg-[#F2413740] h-[2.2em] w-[1.9em] py-4 iconStyle hover:bg-black hover:text-brandRed";
  const section2 = [
    {
      icon: <PiUsersThreeDuotone className={iconStyle} />,
      title: "Publishers",
      body: `Attract more readers, boost traffic and distribution, and generate revenue for your publication by expanding your reach to millions of new readers on the nation’s leading diverse local news app.`,
      link: "Publish on Syndex ",
      ref: "/publish",
    },
    {
      icon: <PiBuildingsDuotone className={iconStyle} />,
      title: "Contributors",
      body: `Grow your audience by reporting on topics important to you and your community. Contribute as an independent voice, sharing local stories that matter.`,
      link: "Become a Contributor",
      ref: "/contribute",
    },
    {
      icon: <RiAdvertisementLine className={iconStyle} />,
      title: "Advertise with us",
      body: `Connect with the ideal individuals at the perfect moment by engaging with over 50 million active community members each month.`,
      link: "Advertise in Syndex",
      ref: "/advertise",
    },
  ];
  return (
    <div className=" bg-white pt-[4em] md:pt-0 ">
      <Hero />
      <div className="absolute  bg-white z-50 w-full md:min-h-screen  ">
        <div className="mb-24">
          <h1 className="text-4xl mt-12 font-bold text-center text-[#292D32] uppercase mb-0 ">
            Partner with us
          </h1>
          <p className="text-lightGray text-center my-0">
            {" "}
            See all publications
          </p>
          <div className="flex justify-evenly mt-4 flex-wrap h-fit">
            {section2.map(({ icon, title, body, link, ref }) => {
              return (
                <div className="w-[80%] min-w-[15em] md:w-[30%] max-w-[21em] flex flex-col items-center justify-center text-center px-8 shadow-[0_0_20px_#c6c6c6cc] py-[3em] rounded-lg hover:shadow-2xl hover:scale-105 my-4 relative">
                  {icon}
                  <h1 className="text-2xl font-bold mt-2">{title}</h1>
                  <p>{body}</p>
                  <a
                    href={ref}
                    className="py-4 px-6 bg-brandRed mt-4 rounded text-center text-white flex items-center justify-center hover:bg-white border-brandRed border-2 hover:text-brandRed"
                  >
                    {link}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-offWhite flex  flex-col-reverse md:flex-row items-center justify-evenly py-12">
          <img
            src={phoneApp}
            alt=""
            className="w-[35em] min-w-[25em] object-cover h-[30em] "
            id="phone"
          />
          <div>
            <h1 className="text-brandRed text-4xl font-bold text-center md:text-left">
              Get the App
            </h1>
            <p className=" mx-4 md:w-8/12 text-lg text-center md:text-left">
              Join the millions of others who’ve already made Syndex their
              trusted source for local black news.
            </p>
            <div className="grid justify-center md:flex gap-4 mt-8 mx-auto md:justify-start">
              <a className="w-[90vw] flex border-[1px] border-lightGray rounded-md md:w-fit px-4 items-center justify-center py-2 hover:text-white hover:bg-black hover:scale-105  ">
                <IoLogoGooglePlaystore className="text-4xl" />
                <div className="flex flex-col">
                  <h2 className="uppercase text-sm my-0 ">get it on</h2>
                  <h1 className="text-2xl my-0 -mt-2">Google Play</h1>
                </div>
              </a>
              <a className="w-[90vw] flex border-[1px] border-lightGray rounded-md md:w-fit px-4 items-center justify-center py-2 hover:text-white hover:bg-black hover:scale-105  ">
                <IoLogoApple className="text-4xl hover:text-white" />
                <div className="flex flex-col">
                  <h2 className="uppercase text-sm my-0 ">Download on the</h2>
                  <h1 className="text-2xl my-0 -mt-2">Apple Store</h1>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="md:w-[45%] mx-auto grid justify-center my-12 ">
            <h1 className="text-4xl text-center font-bold text-brandRed">
              Subscribe to our Newsletter
            </h1>
            <p className="text-lg text-center md:text-left">
              Receive the most recent news headlines from your community
              directly in your email inbox—no need for any additional
              applications!
            </p>
            <button className="bg-brandRed py-4 px-8 text-lg text-white rounded-md mx-auto">
              Sign Up
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
