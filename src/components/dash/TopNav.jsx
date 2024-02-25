import { useEffect, useState } from "react";
import { CiSearch, CiBellOn } from "react-icons/ci";
const sampleData = [
  {
    yt: "https://www.youtube.com/embed/Q3vxTYzFlP8?si=TqOrVLWy8oRu7bdE",
    p: ` The Athletic launched its first NBA player poll in 2019, with 127
          players answering questions about league matters so honestly because`,
    h: "Lakers V Denver",
  },
  {
    yt: "https://www.youtube.com/embed/Q3vxTYzFlP8?si=TqOrVLWy8oRu7bdE",
    p: ` After the impeachment articles against DHS Secretary Alejandro Mayorkas were dismissed by Democrats, Sen. Ted Cruz (R-TX) criticized them for refusing to hold a trial.`,
    h: "BREAKING: Ted Cruz Goes Nuclear On Dems After Rejecting Mayorkas Trial And Refusing To Debate GOP",
  },
  {
    yt: "https://www.youtube.com/embed/wT_NG3hjAqE?si=RAwZUBpAiSYK-xd9",
    p: ` The Athletic launched its first NBA player poll in 2019, with 127
          players answering questions about league matters so honestly because`,
    h: "Trump's hush money trial wraps up Day 2 of witness testimony",
  },
];

function TopNav() {
  const [data, setdata] = useState({
    location: null,
    weather: null,
  });
  useEffect(() => {
    (async function () {
      try {
        const location = await fetch(
          "https://geolocation-db.com/json/e51df120-d81d-11ee-bd72-f518a0ff8c8f",
          {
            method: "GET",
          }
        ).then((res) => res.json());
        await fetch(
          `https://api.weatherbit.io/v2.0/current?lat=${location.latitude}&lon=${location.longitude}&key=7d9022153466498bbd78bb593ac99940`
        )
          .then((res) => res.json())
          .then((data) => {
            setdata({
              location: location,
              weather: data.data[0],
            });
          });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  console.log(data);
  return (
    <div className="relative">
      <div className=" z-50 bg-white fixed  h-[4em] flex justify-end items-center pr-4 border-[1px] rounded-full w-[90%] right-0 ">
        <div className="flex relative ">
          <input
            type="text"
            placeholder="Find what you are looking for?"
            className="px-4 text-md font-light min-w-[30em] py-2 rounded-full bg-[#f9fcff] focus:outline-none shadow-sm"
          />
          <CiSearch className="text-3xl hover:scale-105 hover:text-brandRed absolute right-4 top-1 " />
        </div>
        <CiBellOn className="text-4xl hover:scale-105 border-[1px] mx-4 hover:bg-brandRed rounded-full hover:text-white border-black" />
        <img
          className="w-[3em] h-[3em] rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUCQXzfr2F5d9yaEhCKOhlZBUY8FwhUTDhoeFr5IQUg&s"
          alt=""
        />
      </div>
      <div className="z-40 w-[18em] h-[90vh] fixed right-2 pt-[1em] bottom-2  shadow-[0px_0px_5px_#d0cfd1cc] rounded-xl px-4 overflow-y-auto hidden lg:grid">
        {data.location && data.weather ? (
          <>
            <div className="flex justify-between font-semibold items-center h-fit border-b-2 py-2">
              <h1 className="text-2xl">{data.location.city}</h1>
              <div className="flex">
                <img
                  src={`https://cdn.weatherbit.io/static/img/icons/${data.weather.weather.icon}.png`}
                  alt=""
                  className="h-[2.5em] "
                />
                <p className="text-2xl ml-2">
                  {(data.weather.temp * 9) / 5 + 32}
                  <sup>o</sup>
                </p>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className=" flex absolute bottom-4 justify-center">
          <input
            type="text"
            placeholder="ask Syndex AI"
            className="relative border-2 h-[3em] w-[95%] rounded-full pl-4 focus:outline-none text-gray-600"
          />
          <img
            src="https://as2.ftcdn.net/v2/jpg/05/24/07/39/1000_F_524073986_89TuQsJRJZSjPf0l4bPs1dxuX1tHnpzw.jpg"
            alt=""
            className="h-[3em] absolute right-2 rounded-full border-2  border-brandRed object-cover "
          />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
