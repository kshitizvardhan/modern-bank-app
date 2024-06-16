import {useState} from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  // setting it as false: so its closed 

  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <img src={logo} alt="bank-logo" className="w-[124px] h-[32px]"/>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li key={link.id} className={`font-poppins text-white text-[16px] cursor-pointer font-normal ${index == navLinks.length - 1 ? "mr-0" : "mr-10"}` }>
            <a href={`#${link.id}`}>
              {link.title}
            </a>
          </li>)
        )}
      </ul>

      {/* So below is the list of navlinks for only mobile devices

      We can setUp now a state variable which will keep track whether the user has clicked on the menu icon or not... and if that is true/false it will open or close accordingly */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" 
        onClick={() => {setToggle((click) => !click)}}/>
        {/* Never do the state variable as setToggle(!toggle), instead pass a function which update the toggle value as here click is passed 
        
        So, icon img toggle part is done, now will create the menu which will open when toggle is true with flex as style else if toggle false, then it will be hidden*/}

        <div className={`${ toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((link, index) => (
              <li key={link.id} className={`font-poppins text-white text-[16px] cursor-pointer font-normal ${index == navLinks.length - 1 ? "mb-0" : "mb-4"}`}>
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
              </li>
              ))}
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar