import notFoundImg from "../../assets/404.svg"

function Forbiddenpage() {
  return (
    <div className="ml-[4em] pt-[2.5em] text-4xl md:text-[4em] font-bold flex flex-col items-center justify-center  min-h-[100vh] mx-4 flex-wrap md:flex-nowrap">
      <div>
        <h1 className="animate-pulse font-bold text-center md:text-left leading-[1.1em]">
          Still in development
        </h1>
        <p className="text-3xl mx-4 text-center md:text-left">
          this feature is still being worked on. Check back later for updates!
        </p>
      </div>
      <img src={notFoundImg} alt="" className="animate-bounce mt-2 w-[100%] h-[50vh]" />
    </div>
  );
}

export default Forbiddenpage
