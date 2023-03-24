import React from 'react'
import { img1, img2, img3 } from '../../assets/images'
import ServiceCard from './ServiceCard'


const ServiceList = () => {

    const ServiceData = [
        {
            imgUrl: img1,
            title: "Calculaste weater",
            desc: "lorem more solor jidj halo jala julu ofola mala selakai"
        },
        {
            imgUrl: img2,
            title: "Calculaste weater",
            desc: "lorem more solor jidj halo jala julu ofola mala selakai"
        },
        {
            imgUrl: img3,
            title: "Calculaste weater",
            desc: "lorem more solor jidj halo jala julu ofola mala selakai"
        },
    ]

  return (
    <div className='flex'>
      {
        ServiceData.map((item, index) => (
            <div key={index}>
                    <ServiceCard item={item}/>
            </div>
        ))
      }
    </div>
  )
}

export default ServiceList
