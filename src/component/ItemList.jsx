import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utilities/cartSlice";


export const MenuCart = ({ data }) => {
    const { id, category, name, defaultPrice, price, imageId, description } =
      data.card.info;
    const imgid =
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
      imageId;
  
      const dispatch = useDispatch();
  
      const handleAddButton = () => {
        dispatch(addItem());
        console.log("added");
      };
    return (
      <div className="my-5 flex justify-between items-center">
        <div className=" w-8/12 ">
          <h1 className="font-bold">
            {name}+{id}
          </h1>
          <h2 className="break-words text-wrap">Category: {category}</h2>
          <h2 className="break-words text-wrap">Description: {description}</h2>
          <h2 className="break-words text-wrap">
            DefaultPrice: {defaultPrice ? defaultPrice / 100 : price / 100}
          </h2>
        </div>
        <div className="w-3/12 relative flex justify-center items-center">
          <img className="rounded-t-lg w-20" src={imgid} alt={name} />
          <button
            className="absolute  bottom-0 mb-2 bg-black  text-white rounded-lg px-2 py-1"
            onClick={handleAddButton}
          >
            Add+
          </button>
        </div>
      </div>
    );
  };
  