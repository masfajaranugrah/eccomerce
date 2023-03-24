import React from 'react'
import { protour } from '../assets/images'

const NewsLetter = () => {
  return (
    <div>
         <div className='grid grid-cols-2 justify-center items-center'>
         <div>
      <h3 className='text-[40px] font-bold leading-10 mb-5'>Subscribe now to het useful traveling information.</h3>
      <div>
        <div>
          <input type="text" placeholder='Enter your email' className='relative w-[30rem] px-8 pr-[10rem] py-2 rounded-lg outline-none border-none'/>
              <button className='absolute font-semibold text-white bg-orange-500 px-4 py-2 left-[23rem]'>subscribe</button>
          </div>
        
      </div>
    
      <p className='text-black mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolore, neque nulla a hic adipisci?</p>
    </div>
    <div>
      <img src={protour} alt="" />
    </div>
      </div>
    </div>
  )
}

export default NewsLetter
