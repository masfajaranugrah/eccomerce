import React, { useEffect, useState } from "react";
import { CommontSection, NewsLetter, SearchBar } from "../shared";
import {TourList} from '../Components'


const Tour = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)
  

  useEffect(() => {
    const pages = Math.ceil(5/ 4);
    setPageCount(pages);
  },[page])


  return (
    <section className="w-full relative">
      <div className="bg">
        <CommontSection title={"All Tour"} className="text-white" />
      </div>
      <div>
        <div className="container mx-auto relative leading-10">
          <SearchBar />
          <TourList/>
        </div>
      

        <div className="flex justify-center items-center my-4 gap-3 cursor-pointer">
          {
            [...Array(pageCount).keys()].map(number => (
              <span key={number} onClick={() => setPage(number)}
              className={page === number ? 'active__page' : ''}
              >
                {number + 1}
              </span>
            ))
          }
        </div>

        
      </div>
      <div className="bg-blue-200">
        <div className="container mx-auto relative">
           <NewsLetter/>
        </div>
         
        </div>
       
    </section>
  );
};

export default Tour;


