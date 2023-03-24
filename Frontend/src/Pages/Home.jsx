import React from 'react'
import { hero1, hero2, hero3, hero4, img4} from '../assets/images'
import { NewsLetter } from '../shared'
import GalleryCard from '../Components/Gallery/GalleryCard'
import ServiceList from '../Components/Services/ServiceList'
import { SearchBar, Subtitle } from '../shared'
import Testtimonails from '../Components/Testimonials/Testtimonails'
import { TourList } from '../Components'



const Home = () => {
  return (
    <section className='mt-20'>
    <div className='container mx-auto flex justify-center gap-x-10'>

        {/* --------- left ----------  */}
        <section className='flex flex-col gap-y-4 flex-1 pr-40'>
            <div className='flex justify-left items-center '>
           <div className='bg-orange-500 max-w-[150px] px-2 rounded-full'>
          <Subtitle subtitle={'Know Before You Go'} className='flex justify-center items-center'/>
        </div>
        <div>
        <img src={hero4} alt='world' className='w-[40px]'/>
        </div>
        </div>
      
        <div>
            <div>
                <h1 className='text-[50px] font-bold'>Traveling opens the door to creating <span className='text-orange-500'> memories</span> </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, amet quibusdam numquam accusamus provident sapiente? Autem sint, dignissimos molestiae nihil maxime odio quos vitae. Aspernatur facere necessitatibus repellendus labore molestias!</p>
            </div>
        </div>
       </section> 
       {/* --------- end ---------------*/}

        <section>
          <div>
               <video src={hero1} className='bg'/>
          </div>
       
        </section>
        {/* --------- end right ----------  */}
    

    </div> 
    <div className='container mx-auto '>
    <SearchBar/>

    </div>

    {/* -------- services --------- */}
    <section className='mt-20 w-full relativ flex justify-start '>
      <div className='container mx-auto relative flex  leading-10'>
        <div>
            <h5 className='font-semibold text-[30px]'>what are serve</h5>
        <h2 className='text-[40px] font-bold'>we offer our best services</h2>
        </div>
      
        <div>
           <ServiceList/>
        </div>
       
      </div>
     </section>
    {/* -------- end services --------- */}
     
    {/* -------- feature --------- */}
    <section className='mt-20 w-full relative justify-start '>
      <div className='container mx-auto relative leading-10'>
        <div>
          <div className='bg-orange-500 w-[5rem] flex justify-center items-center rounded-full'>
          <Subtitle subtitle={'Exsplore'} className='text-white text-[40px] font-semibold'/>

          </div>
        <h2 className='text-[40px] font-bold'>we offer our best services</h2>
        </div>
        
        <div>
          <TourList/>
        </div>
      </div>
     </section>
    {/* -------- end feature --------- */}
    
    {/* -------- experience--------- */}
    <section className='relativeve mt-[10rem]'>
      <div className='container mx-auto grid grid-cols-2'>
      {/* --------- left ----------  */}
        <div className='pr-[15rem] '>
<div className='bg-orange-500 w-[5rem] flex justify-center items-center px-2 rounded-lg'>
        <Subtitle subtitle={'Experinece'} className='text-[20px]'/>
      </div>
      <div>
      <h2 className='text-[30px] font-bold leading-8 mt-4'>With our all experince we will server you</h2>
        <p className='text-[15px] mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laboriosam.</p>
      </div>

        <div className='flex gap-x-4 mt-5'>
          <div className='flex justify-center items-center flex-col'>
          <h5 className='bg-orange-500 w-[4rem] h-[4rem] border-rund text-white font-semibold flex justify-center items-center'>12k</h5>
          <p className='text-[15px]'>Susccessful Up</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <h5 className='bg-orange-500 w-[4rem] h-[4rem] border-rund text-white font-semibold flex justify-center items-center'>8k</h5>
          <p className='text-[15px]'>Reguler clients</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <h5 className='bg-orange-500 w-[4rem] h-[4rem] border-rund text-white font-semibold flex justify-center items-center'>10k</h5>
          <p className='text-[15px]'>Years experienct</p>
        </div>
        </div>
        </div>
      
        

        {/* ---------- right -----------  */}

      <div className='col-span-1'>
        <img src={img4} alt="" />
      </div>

      </div>
      
    </section>
   {/* -------- end experience --------- */}

   {/* -------- gallery --------- */}
   <section className='mt-20 '>
    <div className='container mx-auto grid grid-row-1	'>
        <div className='bg-orange-500 px-2 w-[4rem] rounded-lg flex justify-center items-center'>
          <Subtitle subtitle={'gallery'}/>
        </div>
        <div>
          <h5 className='text-[30px] font-bold'>Visit our customers tour gallery</h5>
        </div>

        <div className='grid-cols- grid	grid-cols-1 mt-10'>
           <GalleryCard/>
        </div>
    </div>
   </section>
   {/* -------- end galerry --------- */}




   {/* -------- testimonials --------- */}
   <section className='mt-20 '>
    <div className='container mx-auto grid grid-row-1	'>
        <div className='bg-orange-500 px-2 w-[6rem] rounded-lg flex justify-center items-center'>
          <Subtitle subtitle={'Fans Love'}/>
        </div>
        <div>
          <h5 className='text-[30px] font-bold'>Whats our fans say </h5>
        </div>

        <div className='container mx-auto'>
          <Testtimonails/>
        </div>
    </div>
   </section>
   {/* -------- end testimonials --------- */}


   {/* -------- newslatter --------- */}
   <section className='mt-20 bg-blue-200'>
    <div className='container mx-auto'>
     
     <NewsLetter/>
   
    </div>
   </section>
   {/* -------- end newslatter --------- */}


    </section>
  )
}

export default Home
