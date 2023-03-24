import React from 'react'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <section>
        <div className='flex flex-col  justify-center my-[13rem] items-center'>
        <i className="text-white w-[5rem] h-[5rem] rounded-full flex justify-center items-center text-[50px] bg-green-500 ri-check-double-line" ></i>
        <h1 className='thx'>Thank You</h1>
        <p className='mb-5 font-semibold text-[25px]'>Your tour is blocked.</p>
        <Link to='/'><button className='bg-orange-500 w-[15rem] py-4 rounded-xl'> Back to home</button></Link> 
        </div>
     
    </section>
  )
}

export default ThankYou
