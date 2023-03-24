import React, { useEffect, useRef } from "react";


// import Link and Navlink on react router dom
import { NavLink, Link } from "react-router-dom";

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
               <button className="mx-3"><Link to='/login'>Login</Link></button>
            <button className="px-3 py-2  text-white bg-orange-500 rounded-full"><Link to='/register'>Register</Link></button>
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
