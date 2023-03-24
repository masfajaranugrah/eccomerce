import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userRegister, userIcon } from '../assets/images'
import { BASE_URL } from '../Utils/config'

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
   email: undefined,
   password: undefined
})

const  dispatch  = useContext(AudioContext)
const navigate = useNavigate() 

const handleChange = e => {
    setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
}

const handleClick = async (e) => {
  e.preventDefault()
  
await fetch(`${BASE_URL}/auth/register`,
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(credentials)
    });
    if(!response.ok) alert(result.message)
}

  return (
    <section className='my-20'>
        <div className='flex gap-x-10 border borer-gray-500 bg-white/25 shadow-2xl mx-40 justify-center items-end'>
          {/* --------------left ----------------- */}
          <div className='w-[30rem]'>
            <img src={userRegister} alt="icon" />
          </div>
          {/* --------------end left ----------------- */}


          {/* --------------right ----------------- */}
          <div className='bg-[#00dfc0]  rounded-xl flex my-20 flex-col justify-center items-center relative'>
            <img src={userIcon} alt="icon" className='absolute z-10 w-[5rem] -top-10' />
            <div className='bg-orang-500  z-9 px-4 py-10'>
            <h1 className='text-[30px] font-bold text-center my-5'>Register</h1>
            <form onSubmit={handleClick} action='post' className='flex flex-col justify-center items-center gap-y-5'>
            <div>
                <input type="text" placeholder='Name' required id='username' onChange={handleChange}
                className=' rounded-xl px-3  py-2 outline-none'
                />
              </div> 
              <div>
                <input type="email" placeholder='Email' required id='email' onChange={handleChange}
                className=' rounded-xl px-3  py-2 outline-none'
                />
              </div>         
              <div>
                <input type="password" placeholder='password' required id='password' onChange={handleChange}
               className=' rounded-xl px-3  py-2 outline-none'
                />
              </div>
              <button type='submit' className='bg-violet-900 text-white w-full py-4 rounded-lg font-semibold'>Register</button>
              <p className='text-violet-900'>Already have an account ? <Link to='/login' 
              className='text-black font-semibold'>Login</Link> </p>
            </form>
            </div>
           
          </div>
          {/* --------------end right----------------- */}
        </div>
    </section>
  )
}

export default Register