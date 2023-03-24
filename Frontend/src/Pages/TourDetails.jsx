import React, {useEffect, useRef, useState} from "react";
import { useParams } from "react-router-dom";
import tourData from "../data/tours";
import { CalculateavgRating } from "../Utils";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../Components/Booking/Booking";
import { NewsLetter } from "../shared";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../Utils/config";
const TourDetailsList = () => {

  const { id } = useParams();
  const {data: tour , loading, error} = useFetch(`${BASE_URL}/tours/${id}`)

  const { city, price, photo, desc, reviews, maxGroupSize } = tour;
  const { totalRating, avgRating } = CalculateavgRating(reviews);

  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  const reviewMsgRef = useRef('')
  const [tourRating , setTourRating] =  useState(null)



  // handle submit 
  const handleSubmit = e => {
    e.preventDefault()
   const reviewText = reviewMsgRef.current.value

   alert(`${reviewText}, ${tourRating}`)
  }

useEffect(() => {
  window.scrollTo(0,0)
}, [tour])


  return (
    <section className="relative">
  
      <div className="container mx-auto grid grid-cols-3">
        {/* -------- left ----------  */}
        <section className="col-span-2">
          <div>
            <img src={photo} alt="" />
          </div>
          <div className="border mt-20 border-pink-300  p-20">
            <div>
              <h1 className="font-bold text-[40px]">{tour.title}</h1>
              <div className="flex gap-x-40 my-5">
                <span className="text-[20px]">
                  {avgRating == 0 ? null : avgRating}

                  {totalRating === 0 ? (
                    "Not rating"
                  ) : (
                    <span>revire</span>
                  )}
                </span>
                <h2 className="flex justify-center items-center gap-x-2">
                  <i class="ri-map-pin-user-line"></i>Somewhere
                </h2>
              </div>
              <div className="flex gap-x-40">
                <h3 className="flex justify-center items-center gap-x-2">
                  <i class="ri-map-pin-4-fill"></i>
                  {city}
                </h3>
                <h3 className="flex justify-center items-center gap-x-2">
                  <i class="ri-money-dollar-circle-line"></i>
                  {price} / per person
                </h3>
                <h3 className="flex justify-center items-center gap-x-2">
                  <i class="ri-user-5-fill"></i>
                  {maxGroupSize}
                </h3>
              </div>
              <div className="mt-20">
                <h4 className="text-[30px] font-bold">Description</h4>
                <p>{desc}</p>
              </div>

              <div className="mt-10">
                <h4>Reviews ({reviews?.length} reviews) </h4>
                
                <form onSubmit={handleSubmit} className='mt-5  cursor-pointer'>
                     <div className="flex gap-x-5 justify-start items-center">
                    <span onClick={(() => setTourRating(1))} className="flex justify-center text-gray-500 active:text-orange-500 items-center gap-x-2">
                      1<i class="ri-star-fill"></i>
                    </span>
                    <span onClick={(() => setTourRating(2))} className="flex justify-center text-gray-500 active:text-orange-500 items-center gap-x-2">
                      2<i class="ri-star-fill"></i>
                    </span>
                    <span onClick={(() => setTourRating(13))} className="flex justify-center text-gray-500 active:text-orange-500 items-center gap-x-2">
                      3<i class="ri-star-fill"></i>
                    </span>
                    <span onClick={(() => setTourRating(4))} className="flex justify-center text-gray-500 active:text-orange-500 items-center gap-x-2">
                      4<i class="ri-star-fill"></i>
                    </span>
                    <span onClick={(() => setTourRating(5))} className="flex justify-center text-gray-500 active:text-orange-500 items-center gap-x-2">
                      5<i class="ri-star-fill"></i>
                    </span>
                  </div>
                  <div  className="border border-orange-500 rounded-full w-[40rem] py-4 mt-10 px-4">
                    <input
                      type="text"
                      ref={reviewMsgRef}
                      placeholder="Share your Thoughts"
                      required
                      className="relative w-[30rem] px-8 pr-[rem] py-2 rounded-lg outline-none border-none"
                    />
                    <button
                      type='submit'
                      className="absolute font-semibold text-white rounded-full bg-orange-500 px-4 py-2"
                    >
                      subscribe
                    </button>
                  </div>
                  </form>
                
               

                  <section>
                    <div className="flex justify-between items-center mt-5">
                      <div>
                        <div className="flex items-center">
                      <div className="flex justify-start ">
                        {reviews?.map((reviews) => (
                          <div className="w-[5rem]">
                            <img src={avatar} alt="avatar" />
                          </div>
                        ))}
                      </div>

                      <div>
                        <h5>fajar</h5>
                        <p>
                          {new Date("01-18-2023").toLocaleDateString(
                            "en-US",
                            options
                          )}
                        </p>
                      </div>


                   

                    </div> 
                    <div className="pl-20">
                      <p className="text-[25px]">Amazing Tour</p>
                    </div>
                    </div>
                      <div className="">
                           <span className="gap-x-2 flex justify-center items-center ">5<i class="ri-star-fill"></i></span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-5">
                      <div>
                        <div className="flex items-center">
                      <div className="flex justify-start ">
                        {reviews?.map((reviews) => (
                          <div className="w-[5rem]">
                            <img src={avatar} alt="avatar" />
                          </div>
                        ))}
                      </div>

                      <div>
                        <h5>fajar</h5>
                        <p>
                          {new Date("01-18-2023").toLocaleDateString(
                            "en-US",
                            options
                          )}
                        </p>
                      </div>
                      641c2489005c852ecedcd893

                   

                    </div> 
                    <div className="pl-20">
                      <p className="text-[25px]">Amazing Tour</p>
                    </div>
                    </div>
                      <div className="">
                           <span className="gap-x-2 flex justify-center items-center ">5<i class="ri-star-fill"></i></span>
                      </div>
                    </div>

                  </section>
 
              </div>
            </div>
          </div>
        </section>
        {/* -------- end left ----------  */}

        {/* -------- right ----------  */}
        <section className="border border-orange-500 mx-2 rounded-lg h-[100vh] sticky top-20  ">
          <div  className="conrtainer mx-4 my-10 ">
            <div>
            <Booking tour={tour} avgRating={avgRating}/>
          
            </div>

          </div>
        </section>
        {/* -------- end right ----------  */}
      </div>
      <div className="bg-blue-200 mt-20">
         <div className="container mx-auto ">
        <NewsLetter/>
      </div>
      </div>
      </section>

  );
};

export default TourDetailsList;
