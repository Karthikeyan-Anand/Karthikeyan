import React, { useState, useEffect } from "react";
import { RES_URL } from "../utility";
import {ShimmerUiComponent} from "./ShimmerUIComponent";

export const BodyComponent = () => {
  const [restaurantList, SetRestaurantList] = useState([]);
  const [filteredRestaurantList, SetFilteredRestaurantList] = useState([]);
  const [searchText, SetSearchText] = useState("");

  useEffect(() => {
    fetchData().then((restauranArray) => {
      SetRestaurantList(restauranArray);
      SetFilteredRestaurantList(restauranArray);
    });
    console.log(restaurantList);
  }, []);

  const fetchData = () => {
    return fetch(RES_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Networking response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const restauranArray =
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        return restauranArray;
      })
      .catch((error) => {
        console.log("Fetch error:", error);
        return [];
      });
  };

  const handleInputChange = (event) => {
    SetSearchText(event.target.value);
  };
  const filterButton = () => {
    const filterList = restaurantList.filter((data) =>
      data.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    SetFilteredRestaurantList(filterList);
  };

  return restaurantList.length===0? (<ShimmerUiComponent />): (
    <div className="body-content">
      <div className="search-text">
        <input
          type="text"
          id="search-value"
          placeholder="search here"
          onChange={handleInputChange}
          value={searchText}
        />
        <input
          type="button"
          id="search-button"
          onClick={filterButton}
          value="Search"
        />
      </div>
      <h1 id="res-title" className="res-title">
        Top Restaurant Chains in Chennai
      </h1>
      <div className="res-container">
        {filteredRestaurantList.map((data) => (
          <RestoCard key={data.info.id} resdata={data} />
        ))}
      </div>
    </div>
  );
};
export const RestoCard = ({ resdata }) => {
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resdata.info;
  const imgid =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    cloudinaryImageId;
  return (
    <div className="res-cards">
      <img className="res-img" src={imgid} alt={name} />
      <h1>{name}</h1>
      <h2>
        Rating: {avgRating}
        -Delivery Time: {sla.deliveryTime} mins
      </h2>
      <p>Cuisines: {cuisines.join(", ")}</p>
    </div>
  );
};

export default BodyComponent;
