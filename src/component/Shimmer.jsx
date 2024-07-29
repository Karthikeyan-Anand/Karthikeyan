import react, { useState, useEffect } from "react";

export default Shimmer = () => {
  return (
    <div className="bg-slate-50 ">
      <div className="flex py-5 px-20">
        <div className="px-3">
          <input
            type="text"
            id="search-value"
            className="px-2"
            placeholder="search here"
          />
        </div>
        <input
          type="button"
          className="mx-2 px-2 button bg-black text-white rounded-lg"
          id="search-button"
          value="Search"
        />
      </div>
      <div className="w-9/12 mx-auto  bg-slate-100 ">
        <h1 className="font-bold font-sans text-2xl py-10">
          Top Restaurant Chains in Chennai
        </h1>
        <div className=" flex flex-wrap justify-between">
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
          <div className="bg-slate-200 w-44 h-44 items-center cursor-pointer hover:bg-slate-300 rounded-t-lg p-2"></div>
        </div>
      </div>
    </div>
  );
};
