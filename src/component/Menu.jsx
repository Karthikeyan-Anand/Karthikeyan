import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.jsx";
import MenuBar from "./MenuCard.jsx";
import menuData from "../utilities/json/menu.json";

const Menu = () => {
  const { resId } = useParams();

  const [showIndex,SetShowIndex]=useState([null]);

  if (!menuData) {
    return <Shimmer />;
  }

  const Cards =
    menuData.data.cards[1].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>{
      return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";
    });

   // console.log(Cards);

  const cardDetails = menuData.data.cards[0].card.card.info;

  const { name, slugs, locality, avgRating, costForTwoMessage, cuisines, sla } =
    cardDetails;

  return (
    <div className="bg-slate-50">
      <div className="w-7/12 mx-auto bg-slate-100">
        <div className="m-5 ">
          <h1 className="font-bold p-5 text-black text-center text-2xl">
            {name}
          </h1>
          <div className="flex justify-between">
            <div>
              <h1>Locality : {locality} </h1>
              <h1 className="break-words text-wrap">City : {slugs.restaurant}</h1>
              <h1>Cuisines : {cuisines.join(", ")} </h1>
              <h1>Cost for Two : {costForTwoMessage} </h1>
              <h1>Avg Rating : {avgRating} </h1>
            </div>
            <div>
              <h1>RestaurantId :{sla.restaurantId}</h1>
              <h1>Delivery Time :{sla.deliveryTime}</h1>
              <h1>MinDeliveryTime : {sla.minDeliveryTime}</h1>
              <h1>MaxDeliveryTime : {sla.maxDeliveryTime}</h1>
              <h1>RainMode : {sla.rainMode}</h1>
            </div>
          </div>
          {Cards &&
            Cards.map((item,index) => (
              <MenuBar key={item?.card?.card?.title} Cards={item} 
              showItems ={index === showIndex ? true:false }
              SetShowIndex ={()=> SetShowIndex(index)}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
