import React, { useEffect, useRef, useContext, useState } from "react";


// import Link and Navlink on react router dom
import { NavLink, Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

// list menu
const Nav__link = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tour",
    display: "Tours",
  },
];


const Header = () => {

const navigate = useNavigate();
const {user, dispatch} = useContext(AuthContext)

const logout = () => {
  dispatch({type: 'LOGOUT'})
  navigate('/')
}

const headerRef = useRef()

const headerHandleFunc = () => {
  window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky__nav")
    }else {
      headerRef.current.classList.remove("sticky__nav")
    }
  })
}

useEffect(() => {
  headerHandleFunc()

  return window.removeEventListener('scroll', headerHandleFunc)
})

const [open, setOpen] = useState(false)
const menu = () => {
  setOpen(!open)
}

  return (
    <section className="my-5" ref={headerRef}>
      <div className="container mx-auto flex justify-between items-center">
        {/* ----------- logo -----------  */}
        <div>
          <h1 className="text-[40px] font-bold">Fajar</h1>
        </div>
        {/* -----------end  logo -----------  */}

        {/* ----------- Menu -----------  */}
        <div >
          <ul className="flex justify-center items-center font-semibold gap-x-4">
            {Nav__link.map((item, index) => (
              <li className="flex justify-center items-center" key={index}>
                <NavLink>
                  <Link className=" hover:text-orange-500  focus:text-orange-500" to={item.path}>{item.display}</Link>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* ----------- end menu -----------  */}
        {/* ----------- btn -----------  */}
        <div className="font-semibold flex gap-x-4 items-center">
            <div>
              {
                user? 
                <div className="relative mr-10">
                <div className="flex gap-x-10 justify-center items-center ">
                <h5 onClick={(()=> menu())} className="border-b border-black cursor-pointer">{user.username}</h5>
               
                
                </div>

                {
    
    
                  open ? 
                  <div className="cursor-pointer absolute px-4 py-5 z-90 bg-black/30 -left-[6.5rem]">
                    <div className=" ">

                    
                           <div className="">{user.email}</div>
                           <p className=" text-white " onClick={logout}>Logout</p>
                  </div>
           </div> : ''
                }
                 
                 </div>
                : <div>
      <button className="mx-3"><Link to='/login'>Login</Link></button>
            <button className="px-3 py-2  text-white bg-orange-500 rounded-full">
              <Link to='/register'>Register</Link></button>
                </div>
              }
         
        </div> 
        {/* ----------- toggle -----------  */}
        <div className="lg:hidden">
        <i class="ri-menu-line"></i>
        </div>
        {/* ----------- end toggle -----------  */}


            </div>
           



        {/* ----------- end btn -----------  */}
      </div>
    </section>
  );
};

export default Header;
