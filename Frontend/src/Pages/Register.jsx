import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userRegister, userIcon } from '../assets/images'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../Utils/config'

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: '',
   email: '',
   password: ''
  
})


const {dispatch} = useContext(AuthContext)
const navigate = useNavigate() 

const handleChange = e => {
    setCredentials(prev => ({...prev, [e.target.id]: e.target.value}))
}


const handleClick = async e => {
  e.preventDefault()
  
 try {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });
    const result = await res.json()
    if(!res.ok) {
      if (result.message.includes('duplicate key error')) {
        // error karena username atau email sudah terdaftar
        alert('Message : username or email already')
      } else {
        // error lainnya
        alert('Error:', result.message)
      }
    } else {
      alert('REGISTER SUCCESS')
      navigate('/login')
    }

     dispatch({
      type: 'REGISTER_SUCCESS',
      payload: result
    });
   

 } catch (err) {
  console.log(err)
 }
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
            <form method="post" onSubmit={handleClick}  className='flex flex-col justify-center items-center gap-y-5'>
            <div>
                <input type="text" placeholder='Name' required id='username'  name='username' onChange={handleChange}
                className=' rounded-xl px-3  py-2 outline-none'
                />
              </div> 
              <div>
                <input type="email" placeholder='Email' required id='email'  name='email' onChange={handleChange}
                className=' rounded-xl px-3  py-2 outline-none'
                />
              </div>         
              <div>
                <input type="password" placeholder='password' required id='password'  name='password' onChange={handleChange}
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