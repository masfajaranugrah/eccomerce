import React, { useRef } from "react";
import { BASE_URL } from "../Utils/config";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const locationRef = useRef("")
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)
    const navigate = useNavigate()

    const searchHandler = async() => {
        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;


        if (location === "" || distance === "" || maxGroupSize === "" ){
            return alert('all fiends are requered')
        }

        
const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}
&maxGroupSize=${maxGroupSize}`)

if(!res.ok) alert("something went wrong")

const result  = await res.json()

navigate(`/tours/search?city=${location}&distance=${distance}
&maxGroupSize=${maxGroupSize}`, 
{state : result.data})


    }

  return (
    <section className="mt-28 relative ">
      <div>
        <form className="flex w-[55rem] border bg-white rounded-full shadow-xl py-2">
          {/*-------------- grid 1 ---------- */}
          <div className="flex justify-center items-center">
            <div className="flex px-2">
                <div className="px-2">
              <i className="text-[30px] ri-map-pin-line  text-orange-500"></i>  
            </div>
            <div className="w-[12rem] border-r border-black/40">
            <h3 className="text-[20px] font-semibold">Location</h3>    
              <input
                type="text"
                className="outline-none w-[10rem]"
                placeholder="where are yuu going?"
                ref={locationRef}
              />
            </div>  
            </div>
          
          </div>

          {/* ----------- grid 2 ---------------- */}
          <div className="flex justify-center items-center">
            <div className="flex px-2">
                <div className="px-2">
              <i className="text-[30px] ri-map-pin-line  text-orange-500"></i>  
            </div>
            <div className="w-[12rem] border-r border-black/40">
            <h3 className="text-[20px] font-semibold">Distance</h3>    
              <input
                type="text"
                className="outline-none w-[10rem]"
                placeholder="Distance k/m"
                ref={distanceRef}
              />
            </div>  
            </div>
          
          </div>

          {/* ----------- grid 3 ---------------- */}
          <div className="flex justify-center items-center">
            <div className="flex px-2">
                <div className="px-2">
              <i className="text-[30px] ri-map-pin-line  text-orange-500"></i>  
            </div>
            <div className="w-[12rem] border-r border-black/40">
            <h3 className="text-[20px] font-semibold">Max Ground</h3>    
              <input
                type="number"
                className="outline-none w-[10rem]"
                placeholder="0"
                ref={maxGroupSizeRef}
              />
            </div>  
            </div>
          
          </div>

{/* ----------- grid 4 ---------------- */}
            <div className="relative -right-4">
            <span className="m-2 bg-orange-500 px-2  rounded " type='submit' onClick={searchHandler}>
            <i className="text-[30px] ri-search-2-line text-white"></i>
            </span>
          </div>

        </form>
      </div>
    </section>
  );
};

export default SearchBar;
