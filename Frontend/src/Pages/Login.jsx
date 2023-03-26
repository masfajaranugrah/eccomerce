import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userLogin, userIcon } from '../assets/images'

import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../Utils/config'



const Login = () => {

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate() 


  const [credentials, setCredentials] = useState({
   email: undefined,
   password: undefined
})

const handleChange = e => {
    setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
}

const handleClick = async e => {
  e.preventDefault()
  
  try {
   const res = await fetch(`${BASE_URL}/auth/login`, {
     method: 'post',
     headers: {
       'content-type': 'application/json'
     },
     body: JSON.stringify(credentials)
   });
     const result = await res.json()
     if(!res.ok) {
       if (result.message.includes('users not found')) {
         // error karena username atau email sudah terdaftar
         alert('Message : email or password failure')
       } else {
         // error lainnya
         alert('Error:', result.message)
       }
     } else {
       alert('LOGIN SUCCESS')
       navigate('/')
     }
 
      dispatch({
       type: 'LOGIN_SUCCESS',
       payload: result.data
     });
    
 
  } catch (err) {
   console.log(err)

   dispatch({
    type: 'LOGIN_FAILURE',
    payload: err.message
  });
  }
 }
 
  return (
    <section className='my-20'>
        <div className='flex gap-x-10 border borer-gray-500 bg-white/25 shadow-2xl mx-40 justify-center items-end'>
          {/* --------------left ----------------- */}
          <div className='w-[30rem]'>
            <img src={userLogin} alt="icon" />
          </div>
          {/* --------------end left ----------------- */}


          {/* --------------right ----------------- */}
          <div className='bg-[#00dfc0] rounded-xl flex my-20 flex-col justify-center items-center relative'>
            <img src={userIcon} alt="icon" className='absolute z-10 w-[5rem] -top-10' />
            <div className='bg-orang-500  z-9 px-4 py-10'>
            <h1 className='text-[30px] font-bold text-center my-5'>Login</h1>
            <form onSubmit={handleClick} className='flex flex-col justify-center items-center gap-y-5'>
            <div>
                <input type="email" placeholder='Email' required id='email' onChange={handleChange}
                className=' rounded-xl px-3  py-2 outline-none'
                oninvalid="this.setCustomValidity('data tidak boleh kosong')" oninput="setCustomValidity('')"
                />
              </div>     
              <div>
                <input type="password" placeholder='password' required id='password' onChange={handleChange}
               className=' rounded-xl px-3  py-2 outline-none'
                />
              </div>
              <button type='submit' className='bg-violet-900 font-semibold text-[25px] text-white w-full py-3 rounded-lg'>Login</button>
              <p className='text-violet-900'>Don't have an account ? <Link to='/register' className='text-black font-semibold'>Register</Link> </p>
           
            </form>
            </div>
           
          </div>
          {/* --------------end right----------------- */}
        </div>
    </section>
  )
}

export default Login