import React from 'react'

const ServiceCard = ({item}) => {
    const {imgUrl, title, desc} = item
  return (
    <section className='mx-4 px-10 border-r border-black/20'>
        <div className=''>
              <div className='bg-orange-500 w-[4rem] h-[4rem] flex justify-center items-center rounded-full mb-5 px-2 py-2'>
            <img src={imgUrl} alt="logo" className='w-[40px] ' />
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
        </div>
      
    </section>
  )
}

export default ServiceCard
