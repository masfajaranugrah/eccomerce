import React, {useEffect, useRef, useState, useContext} from "react";
import { useParams , useNavigate} from "react-router-dom";
import tourData from "../data/tours";
import { CalculateavgRating } from "../Utils";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../Components/Booking/Booking";
import { NewsLetter } from "../shared";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../Utils/config";
import { AuthContext } from "../context/AuthContext";
const TourDetailsList = () => {

  const { id } = useParams();  
  const reviewMsgRef = useRef('') 
  const [tourRating , setTourRating] =  useState(null)
  const [start, setStart] = useState(false)

  const handleStart = () => {
    setStart(!start)
  }


  const {data: tour } = useFetch(`${BASE_URL}/tours/${id}`)

  const { city, price, photo, desc, reviews, maxGroupSize } = tour;
  const { totalRating, avgRating } = CalculateavgRating(reviews);

  //format date
  const options = { day: "numeric", month: "long", year: "numeric" };


 
  const {user} = useContext(AuthContext)

  // handle submit 
  const handleSubmit = async e => {
    e.preventDefault()
   const reviewText = reviewMsgRef.current.value;

  
   try {
    
    if(!user || user === undefined || user === null){
    alert("Please sign in")
   }


   const reviewObj = {
    username: user.username,
    reviewText,
    rating: tourRating
   }

   const res = await fetch(`${BASE_URL}/review/${id}`, {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
   body: JSON.stringify(reviewObj)
  });
    const result = await res.json()
    if(!res.ok) {
      return alert(result.message)
    }
    alert('rating submitted')
   } catch (err) {
      alert(err.message)
   }
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
                
                <form onSubmit={handleSubmit} method='post' className='mt-5  cursor-pointer'>
                     <div className="flex gap-x-5 justify-start items-center">
                    <span onClick={(() => setTourRating(1))} className="flex justify-center text-orange-500 active:text-orange-500 items-center gap-x-2">
                        <div onClick={(() => handleStart())}>
                            {
                              start ? <i class="ri-star-fill"></i> : <i class="ri-star-line"></i>
                            }
                        </div>
                
                    </span>
                    <span onClick={(() => setTourRating(2))} className="flex justify-center text-orange-500 active:text-orange-500 items-center gap-x-2">
                    <div onClick={(() => handleStart())}>
                            {
                              start ? <i class="ri-star-fill"></i> : <i class="ri-star-line"></i>
                            }
                        </div>

                    </span>
                    <span onClick={(() => setTourRating(13))} className="flex justify-center text-orange-500 active:text-orange-500 items-center gap-x-2">
                    
                    <div onClick={(() => handleStart())}>
                            {
                              start ? <i class="ri-star-fill"></i> : <i class="ri-star-line"></i>
                            }
                        </div>

                    </span>
                    <span onClick={(() => setTourRating(4))} className="flex justify-center text-orange-500 active:text-orange-500 items-center gap-x-2">
                        <div onClick={(() => handleStart())}>
                            {
                              start ? <i class="ri-star-fill"></i> : <i class="ri-star-line"></i>
                            }
                        </div>


                    </span>
                    <span onClick={(() => setTourRating(5))} className="flex justify-center text-orange-500 active:text-orange-500 items-center gap-x-2">
                       <div onClick={(() => handleStart())}>
                            {
                              start ? <i class="ri-star-fill"></i> : <i class="ri-star-line"></i>
                            }
                        </div>
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

   <section>
                      <div>
                          {
                            reviews?.map(review => (
                              <section className="flex flex-col item-center justify-center">
                                <div className="flex ">
                                   <div className="w-[5rem] ">
                                   <img src={avatar} alt="logo" className="rounded-full" />
                                </div>
                               <div className="w-full py-5 border-b border-black">
                                <div className="flex justify-between items-center">
                                  <h5>{review.username}</h5>
                                <span>{review.rating}</span>
                                </div>
                                 
                                <h6 className="mt-5">{review.reviewText}</h6>
                               </div>
                               
                                </div>
                               
                              </section>
                            ))
                          }
                      </div>
                  </section>
 


                  </form>
                
               

               
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
