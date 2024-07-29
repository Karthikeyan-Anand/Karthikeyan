import React, { useContext, useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestoCard, { WithPromotedLabel } from "./RestoCard.jsx";
import fetchResData from "./Customhooks/useFetchRestaurantArray";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Customhooks/useOnlineStatus.jsx";
import resData from "../utilities/json/res.json";
import { ThemeContext } from "../utilities/ThemeContext.jsx";

const Body = () => {
  const [restaurantList, SetRestaurantList] = useState([null]);
  const [filteredRestaurantList, SetFilteredRestaurantList] = useState([]);
  const [searchText, SetSearchText] = useState("");

  useEffect(() => {
    const restauranArray =
      resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    SetRestaurantList(restauranArray);
    SetFilteredRestaurantList(restauranArray);
  }, []);

  //const { theme, toggleTheme } = useContext(ThemeContext);
  const onlineStatus = useOnlineStatus();

  const RestoCartWithPromoted = WithPromotedLabel(RestoCard);

  if (!onlineStatus) {
    return (
      <h1 className="w-6/12 mx-auto ">
        It seems you were offline! Please check your internet connection!!
      </h1>
    );
  }

  const handleInputChange = (event) => {
    SetSearchText(event.target.value);
  };
  const filterButton = () => {
    const filterList = restaurantList.filter((data) =>
      data.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    SetFilteredRestaurantList(filterList);
  };
  // const handleThemeButton = () => {
  //   console.log("Theme button clicked");
  //   toggleTheme();
  // };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
      <div
        className="bg-slate-50"
      >
        <div className="relative flex w-full py-5 px-20">
          <div className="px-3">
            <input
              type="text"
              id="search-value"
              className="px-2"
              placeholder="search here"
              onChange={handleInputChange}
              value={searchText}
            />
          </div>
          <input
            type="button"
            className="mx-2 px-2 button bg-black text-white rounded-lg"
            id="search-button"
            onClick={filterButton}
            value="Search"
          />
          <button
            className="absolute bg-slate-700 right-20 rounded-lg text-white flex-end"
          >
            M🎀DE
          </button>
        </div>
      <div className="w-9/12 mx-auto ">
        <h1 className="font-bold font-sans text-2xl py-10">
          Top Restaurant Chains in Chennai
        </h1>
        <div className=" flex flex-wrap flex-row justify-between">
          {filteredRestaurantList &&
            filteredRestaurantList.map((data) => (
              <Link key={data.info.id} to={"/restaurant/" + data.info.id}>
                {data.info.avgRating >= 4.2 ? (
                  <RestoCartWithPromoted resdata={data} />
                ) : (
                  <RestoCard resdata={data} />
                )}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
