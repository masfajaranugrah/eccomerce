import React from 'react'
import FeatureCard from '../../shared/TourCard'
import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../Utils/config'

const TourList = () => {

const {data : featuredTours, loading, error} = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`) 

console.log(featuredTours)
  return (
    <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 mt-20 '>
      {
        loading && <h4>Loading .....</h4>
      }
      {
        error && <h4>{error}</h4>
      }
      {
        featuredTours?.map((tour) => (
            <div key={tour._id}>
                <FeatureCard tour={tour} className='flex justify-center'/>
            </div>
        ))
      }
    </div>
  )
}

export default TourList
