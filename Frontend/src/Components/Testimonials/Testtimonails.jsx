import React from 'react'
import { profile1, profile2, profile3 } from '../../assets/images'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Testtimonails = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        swipeToSlide:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      cssEase: "linear",
      };
  return (
    <Slider {...settings} >
        <div className=' w-[30rem] px-20 py-4 gap-x-20 shadow-2xl shadow-gray-900 bg-white'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolore fugiat rerum cupiditate totam! Earum qui at iure repudiandae optio?</p>


            <div className='flex mt-4 gap-x-4'>
                <img src={profile1} alt="pro"  className='rounded-lg w-[5rem]'/>
                <div>
                    <h5>bagas</h5>
                    <p>customer</p>
                </div>
            </div>

        </div> 
        <div className=' w-[30rem] px-20 py-4 gap-x-20'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolore fugiat rerum cupiditate totam! Earum qui at iure repudiandae optio?</p>


            <div className='flex mt-4 gap-x-4'>
                <img src={profile3} alt="pro"  className='rounded-lg w-[5rem]'/>
                <div>
                    <h5>bagas</h5>
                    <p>customer</p>
                </div>
            </div>

        </div> 

        <div className=' w-[30rem] px-20 py-4 gap-x-20 shadow-2xl shadow-gray-900 bg-white'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolore fugiat rerum cupiditate totam! Earum qui at iure repudiandae optio?</p>


            <div className='flex mt-4 gap-x-4'>
                <img src={profile2} alt="pro"  className='rounded-lg w-[5rem]'/>
                <div>
                    <h5>bagas</h5>
                    <p>customer</p>
                </div>
            </div>

        </div> 
       

        <div className=' w-[30rem] px-20 py-4 gap-x-20'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolore fugiat rerum cupiditate totam! Earum qui at iure repudiandae optio?</p>


            <div className='flex mt-4 gap-x-4'>
                <img src={profile3} alt="pro"  className='rounded-lg w-[5rem]'/>
                <div>
                    <h5>bagas</h5>
                    <p>customer</p>
                </div>
            </div>

        </div> 
        
    </Slider>
  )
}

export default Testtimonails
