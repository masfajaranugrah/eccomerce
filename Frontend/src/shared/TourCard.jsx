import React from "react";
import { Link } from "react-router-dom";
import { CalculateavgRating } from "../Utils";

const FeatureCard = ({ tour }) => {

  //cell database 
  const { _id, title, city, price, photo, featured, reviews } = tour;
const {totalRating, avgRating} = CalculateavgRating(reviews)


  return (
    <section className="relative">
      <div className="container mx-auto bg-white shadow-xl rounded-xl flex flex-col justify-center item-center">
        <div className=" relative">
          <img src={photo} alt="img" className="w-full rounded-lg" />
          {featured && (
            <p className="absolute bottom-0 right-0 px-4 text-white bg-orange-500">
              Featured
            </p>
          )}
        </div>
        <div className="px-2">
          <div className=" flex justify-between item-center">
            <span className="flex">
              {" "}
              <i className="text-orange-500 text-[20px] ri-map-pin-line"></i>
              <h1 className="text-[15px] ">{city}</h1>
            </span>
            <span className="flex">
              <i className="text-orange-500 ri-star-fill text-[20px]"></i>
              <h2 className="text-[15px]">
                {avgRating == 0 ? null : avgRating}

                {totalRating === 0 ? (
                  "Not rating"
                ) : (
                  <span>({reviews.length})</span>
                )}
              </h2>
            </span>
          </div>
          <div>
            <h3 className="text-[20px] font-bold">
              <Link to={`/tours/${_id}`}>{title}</Link>{" "}
            </h3>
          </div>
          <div className="flex justify-between mb-10">
            <span className="flex">
              <h4 className="text-orange-500">${price}</h4>
              <p className="text-[14px]"> /per peson</p>{" "}
            </span>
            <h5 className="text-[14px] bg-orange-500 text-white px-4  rounded-lg">
              <Link to={`/tours/${_id}`}>Book Now</Link>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
