import { number } from 'prop-types'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NewsLetter } from '../../shared'



const Booking = ({tour, avgRating}) => {
    const {price, reviews} = tour
    const Navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: "example@gmail.com",
        fullName:'',
        phone: '',
        guestSize: 1,
        bookAt: ''
    })

    const handleChange = e => {
        setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
    }


    // handle buy
    const serviceFee = 10
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

    // send data to server 
const handleClick = e => {
        e.preventDefault()
        Navigate("/thank-you")
        
        
        
}

  return (
    <section className='mb-5'   >
          <div className='flex text-black justify-between items-center gap-x-20 text-[25px] pb-10 font-semibold border-b border-gray-500'>
      <h1 className='font-bold'>${price} <spanc className='font-semibold text-[15px]'> /per person</spanc> </h1>
      <span className="text-[20px]">
                  {avgRating == 0 ? null : avgRating}
                  ({reviews?.length})
                </span>
                </div>

                           
            <div >
            <h5 className="font-bold text-[2rem] my-5">Information</h5>
            <form onSubmit={handleClick} className="border border-gray-900 px-4 rounded-md">
              <div>
              <input type="text" placeholder="Full Name"   required onChange={handleChange} 
               id="fullName" className=" my-4 border-b border-gray-500 outline-none w-full px-2 py-3" />
              </div>
              <div>
              <input type="tel" placeholder="Phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  
              required onChange={handleChange}  id="phone" className="my-4 border-b border-gray-500 outline-none w-full px-2 py-3" />
              </div>
              <div className="grid grid-cols-2 gap-x-3">
              <input type="Date"  required onChange={handleChange}  id='bookAt' 
              className="my-4 border-b border-gray-500 outline-none w-full px-2 py-3" />
              <input type="number" placeholder="Guest"   required onChange={handleChange}  id="guestSize" 
              className="my-4 border-b border-gray-500 outline-none w-full px-2 py-3" />
             
              </div>
            </form>

            <div className="mt-5">
              <div className="flex justify-between items-center">
                   <h5>${price} x 1 person</h5>
              <span>${price}</span>
              </div>
              <div className="flex justify-between items-center">
                   <h5>Fee</h5>
              <span>${serviceFee}</span>
              </div>
              <div className="flex justify-between items-center">
                   <h5>Total</h5>
              <span>${totalAmount}</span>
              </div>
              <div className="mt-9">
                <button type='submit' onClick={handleClick} className="bg-orange-500 text-white w-full py-3 rounded-xl">Buy</button>
              </div>
            </div>
            </div>
           
    </section>
  
  )
}

export default Booking
99