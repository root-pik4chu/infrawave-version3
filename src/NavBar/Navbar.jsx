'use client';
import React, { useState , useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible , setVisible] = useState(true);

  const handleVisibility = () =>{
    setVisible(false);
    setTimeout(() => {
      setVisible(true)
    }, 1000);
  }
  if(!visible) return null;
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
    { name: 'portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className="Navbar fixed top-0  h-[10vh] w-full  text-black px-[1vw] ">

      {/* -------------- */}

      


      {/* -------------- */}


      <div className="w-full h-full grid grid-cols-5 items-center z-[9999] ">
        {/* Logo */}
        <div className="flex justify-start col-span-1">
          <Link href="/">
            <Image src="/Group_57.svg" className='' alt="Infrawave Logo" width={120} height={30} />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:grid col-span-4 grid-cols-4 mix-blend-difference">
          {navItems.map((item, index) => (
            <div key={index} className="flex justify-end">
              <Link 
                // onClick={handleVisibility}
                href={item.path}
                className="text-[0.8vw] font-medium capitalize hover:cursor-pointer mix-blend-difference"
              >
                <p className='   '>{item.name}</p>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex justify-end md:hidden col-span-4">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden absolute top-[10vh] left-0 w-full  flex flex-col items-center gap-6 py-6 shadow-md ">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="text-base font-medium capitalize"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
