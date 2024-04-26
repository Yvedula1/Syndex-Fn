import notFoundImg from "../assets/404.svg"
function NotFoundPage() {
  return (
    <div className="pt-[2.5em] text-4xl md:text-[4em] font-bold flex items-center justify-center  min-h-[50vh] mx-4 flex-wrap md:flex-nowrap">
      <div>
        <h1 className="animate-pulse font-bold text-center md:text-left leading-[1.1em]">
          Still in development
        </h1>
        <p className="text-3xl mx-4 text-center md:text-left">
          this feature is still being worked on. Check back later for updates!
        </p>
      </div>
      <img src={notFoundImg} alt="" className="animate-bounce mt-2 w-[100%]" />
    </div>
  );
}

export default NotFoundPage;
