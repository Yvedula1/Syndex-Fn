import Button from "./Button";
import idrisHero from "../assets/hero.png";

function Hero() {
  return (
    <div className="px-[3vw] z-[10] w-full md:flex h-screen bg-offWhite overflow-hidden md:pb-0 relative">
      <div className="text-center md:h-[85vh] z-[250] flex flex-col justify-end md:w-[50vw] pt-[4em] backdrop-blur-sm md:backdrop-blur-none md:text-left">
        <h1 className="text-2xl md:text-[2.8em] font-bold  text-[#292D32] uppercase md:leading-[55px] md:text-left hover:ml-1">
          <span className="text-brandRed font-bold hover:animate-bounce hover:absolute">
            SYNDEX
          </span>{" "}
          <br></br>the First Intelligent<br></br> Local News & Information
          Aggregator for
          <br></br> Multicultural Communities
        </h1>
        <p className="mt-2 text-lg  text-lightGray md:text-left hover:ml-2">
          All your favorite news, publications, blogs,magazines, and newspapers
          in a single personalized feed.
        </p>
        <div className="grid justify-center md:justify-start">
          <Button text={"Request a demo"} className="" />
        </div>
      </div>
      <img
        src={idrisHero}
        alt=""
        className="z-[-4] absolute  right-[-0em] md:fixed md:h-[80vh] bottom-[0em] md:right-[-7em] object-cover"
      />
      <div></div>
    </div>
  );
}

export default Hero;
