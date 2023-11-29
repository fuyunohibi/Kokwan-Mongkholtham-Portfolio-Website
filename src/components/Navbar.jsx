import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import useCheckScreenSize from '../utils/useCheckScreenSize';  
import { menu, close } from '../assets';
import { navLinks } from '../data';
import BottomSheet from './BottomSheet';

const Navbar = ({ activeSection }) => {
  const [active, setActive] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isLaptop = useCheckScreenSize('laptop');  // My custom hook

  useEffect(() => {
    setActive(activeSection);
  }, [activeSection]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav
        className="glass-navbar shadow-md p-4 px-8 flex justify-between items-center fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 
        rounded-[2rem] w-[90vw] mobile:w-[25rem] h-[3.5rem] 
        tablet:w-[30rem] tablet:h-16 laptop:top-0 laptop:bottom-auto laptop:rounded-none laptop:rounded-b-[2rem] laptop:w-screen laptop:h-[4.6rem]"
      >
        <Link
          to="/"
          onClick={() => {
            setActive("Home");
            window.scrollTo(0, 0);
          }}
          className="text-accent font-vanilla  text-lg mobile:text-xl customHover"
        >
          Ko-Kwan
        </Link>
        <ul className="flex space-x-10">
          {isLaptop ? (
            navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.name)}
                  className={`font-vanilla text-xl customHover hover:text-accent transition-all duration-300 
                    ${active === nav.name ? "text-accent" : "text-inActive"}
                  `}
                >
                  {nav.name}
                </a>
              </li>
            ))
          ) : (
            <button onClick={toggleMenu}>
              <img
                src={menu}
                alt="menu"
                className="w-6 h-6 transform transition-transform hover:rotate-90"
              />
            </button>
          )}
        </ul>
      </nav>
      {!isLaptop && (
        <BottomSheet show={showMenu}>
          <ul
            className="grid grid-cols-3 text-center 
            "
          >
            {navLinks.map((nav) => (
              <NavItem
                key={nav.id}
                nav={nav}
                active={active}
                onClick={() => {
                  toggleMenu();
                  setActive(nav.name);
                }}
              />
            ))}
          </ul>
          <div className="absolute bottom-0 right-0 mr-[2rem] mb-2">
            <img
              src={close}
              alt="close"
              onClick={toggleMenu}
              className="w-6 h-6 mx-auto my-3 transition-transform duration-500 ease-in-out transform hover:rotate-180"
            />
          </div>
        </BottomSheet>
      )}
    </>
  );
};

const NavItem = ({ nav, active, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li 
      className='mx-6 my-[0.65rem] relative
        tablet:mx-10 tablet:my-[0.7rem]
      '
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
    >
      <a
        onClick={onClick}
        href={`#${nav.id}`}
        className={`font-vanilla text-sm hover:text-accent transition-all duration-300 
            ${active === nav.name ? "text-accent" : "text-inActive"}
        `} 
      >
        <div className='flex justify-center'>
          <img 
            src={nav.inActiveIcon}
            alt={nav.name}  
            className={`absolute w-6 h-6 mx-auto my-2 transition-opacity duration-300 ${active === nav.name || isHovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img 
            src={nav.activeIcon}
            alt={nav.name}  
            className={`w-6 h-6 mx-auto my-2 transition-opacity duration-300 ${active === nav.name || isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        {nav.name}
      </a>
    </li>
  );
}




export default Navbar;
