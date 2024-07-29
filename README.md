
# உணவே மருந்து!!

## Table of contents:
1. Overview.
2. Features.
3. Pre-requisites.
4. Steps undergone for development.
5. Instalation.

## Overview
This is a food delivering application which interconnects Restaurants to user as similiar to swiggy app.

## Features
- Have a List of Restaurants depending the location.
- Have each restaurants menu list.
- Have a cart for listing your Order.
- Have payment method with third party payment regulator.

## Pre-requisites
- React library(react, reactDom, useState, useEffect, react-router-dom, parcel, useContext, redux).
- tailwindcss(postcssrc).
- jsx, javascript.

## Steps undergone for development
- Create a index.html file having the <div textid = "main">
- Create app.js file that having react and react router dom for configuring router.
- Created 




## Instalation

const {
  //   id,
  //   city,
  //   name,
  //   locality,
  //   areaName,
  //   costForTwoMessage,
  //   cuisines,
  //   avgRating,
    
    name,
    slugs,
    cloudinaryImageId,
    locality,
    aggregatedDiscountInfoV2,
    costForTwoMessage,
    cuisines,
    availability,
  } = restaurantInfo;

  const imgid = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

 <img src={imgid} alt={name} className="w-auto" />
        <h1> Restaurant Name: {name} + {id} </h1>
        <h1> Locality: {locality} </h1>
        <h1> Area Name: {aggregatedDiscountInfoV2.areaName} </h1>
        <h1> Cost for Two: {costForTwoMessage} </h1>
        <h1> Cuisines: {cuisines.join(", ")} </h1>
        <h1> Avg Rating: {availability.avgRating} </h1>
       {/* <h1>Name:{restaurantInfo}</h1> */}
        {/* <h1> Area Name: {areaName} </h1>
        <h1> Avg Rating:{avgRating} </h1>
        <h1>
          Restaurant Name: {name} + {id}
        </h1>
        <h1> Locality: {locality} </h1>
        <h1>city:{city}</h1>
        <h1> Area Name: {areaName} </h1>
        <h1> Cost for Two: {costForTwoMessage} </h1>
        <h1> Cuisines: {cuisines.join(", ")} </h1>
        <h1> Avg Rating: {avgRating} </h1> */}