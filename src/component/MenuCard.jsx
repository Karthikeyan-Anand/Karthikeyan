import { useState } from "react";
import { MenuCart } from "./ItemList";

export default MenuBar = ({ Cards, showItems, SetShowIndex }) => {
  const [showIndex2, SetShowIndex2] = useState([null]);
  const title = Cards?.card?.card?.title || "No Title";
  const categories = Cards?.card?.card?.categories || [];

  const handleClick = () => {
    SetShowIndex();
  };

  return (
    <div className="w-auto mx-auto my-8 bg-gray-50 shadow-lg p-1">
      <div
        className="flex bg-gray-100 justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-left text-stone-950 text-2xl">
          {title}({categories.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>
        {showItems &&
          categories.map((data, index) => (
            <CategoryBar
              key={data.title}
              data={data}
              showItems={index === showIndex2 ? true : false}
              SetShowIndex2={() => SetShowIndex2(index)}
            />
          ))}
      </div>
    </div>
  );
};

const CategoryBar = ({ data, showItems, SetShowIndex2 }) => {
  const itemCards = data?.itemCards || [];
  const title = data?.title || "No Title";

  const handleClick = () => {
    SetShowIndex2();
  };

  return (
    <div className="w-auto">
      <div className="w-auto mx-auto my-4 bg-slate-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-left text-black text-1xl">
            {title}({itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <div>
          {showItems &&
            itemCards.map((data) => (
              <MenuCart key={data.card.info.id} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};


