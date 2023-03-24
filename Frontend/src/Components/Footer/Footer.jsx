import React from 'react'

const Footer = () => {

const DiscoverLst = [
  {
    title:'Home',
    link:'#'
  },
  {
    title:'About',
    link:'#'
  },
  {
    title:'Tour',
    link:'#'
  },
]

const QuictList = [
  {
    title:'Gallery',
    link:'#'
  },
  {
    title:'Login',
    link:'#'
  },
  {
    title:'Register',
    link:'#'
  },
]

const ContactList = [
  {
    icon: <i class="ri-map-pin-range-fill"></i>,
    title:'address',
    content: 'indonesia',
    link:'#'
  },
  {
    icon: <i class="ri-mail-check-line"></i>,
    title:'Email',
    content: 'Massfajar233@gmail.com',
    link:'#'
  },
  {
    icon: <i class="ri-phone-line"></i>,
    title:'Phone',
    content: '081245780304',
    link:'#'
  },

]

  return (
    <section className='mt-10'>
      <div className='container mx-auto '>
        <div className='grid grid-cols-4 justify-center items-start'>
          {/* ------- cols 1 -------  */}
          <div>
            <h2 className='text-orange-500 font-bold text-[40px]'>Toko online</h2>
            <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eum quidem pariatur assumenda illo hic!</p>
            <div className='flex text-black gap-x-5 text-[25px]'>
            <i class="ri-facebook-circle-fill"></i>
            <i class="ri-whatsapp-fill"></i>
            <i class="ri-twitter-fill"></i>
            <i class="ri-instagram-fill"></i>
            </div>
          </div>
          {/* ------- end cols 1 -------  */}


          
           {/* ------- cols 2 -------  */}
          <div className='top-4 relative mx-10 '>
            <h4 className='text-[25px] font-semibold'>Discover</h4>
            <ul>
              {
                  DiscoverLst.map((item, index) => (
                    <li key={index} className='py-3'><a href={item.link}>{item.title}</a></li>
                  ))
              }
            </ul>
          </div>
          {/* ------- end cols 2 -------  */}
          {/* ------- cols 3 -------  */}
          <div className='top-4 relative mx-10'>
            <h4 className='text-[25px] font-semibold'>Quick List</h4>
            <ul>
              {
                  QuictList.map((item, index) => (
                    <li key={index} className='py-3'><a href={item.link}>{item.title}</a></li>
                  ))
              }
            </ul>
          </div>
          {/* ------- end cols 3 -------  */}

          {/* ------- cols 4 -------  */}
          <div className='top-4 relative'>
            <h4 className='text-[25px] font-semibold'>Contact</h4>
            <div>
              {
                  ContactList.map((item, index) => (
                    <div key={index} className='text-[15px]'>
                      <div className='flex'>
                        <p className='px-4'>{item.icon}</p>
                        <div className='flex'>
                          <p>{item.title}</p>
                          <p>: {item.content}</p>
                        </div>
                        
                      </div>
                     
                     </div>
                  ))
              }
            </div>
          </div>
          {/* ------- end cols 4 -------  */}

        </div>
        <p className='flex justify-center items-center text-[30px] font-semibold mt-5'>&copy; by developed fajar</p>
      </div>
    </section>
  )
}

export default Footer