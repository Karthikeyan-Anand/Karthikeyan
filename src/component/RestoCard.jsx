export default RestoCard = ({ resdata }) => {
  const { name, id, cloudinaryImageId, cuisines, avgRating, sla } =
    resdata.info;
  const resId = id;
  const imgid =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    cloudinaryImageId;
  return (
    <div className="relative bg-slate-100 w-44 items-center cursor-pointer hover:bg-slate-300 rounded-lg p-2 ">
      <img className="rounded-t-lg w-full" src={imgid} alt={name} />
      <h1 className="font-bold">
        {name}+{resId}
      </h1>
      <h2 className="break-words text-wrap">Rating: {avgRating}</h2>
      <h2 className="break-words text-wrap">Time: {sla.deliveryTime} mins</h2>
      <h3 className="break-words truncate">Cuisines: {cuisines.join(",")}</h3>
    </div>
  );
};

export const WithPromotedLabel = (RestoCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className=" rounded-lg top-0 left-0 bg-black text-white p-1 z-10">
          Promoted
        </label>
        <RestoCard {...props} />
      </div>
    );
  };
};
