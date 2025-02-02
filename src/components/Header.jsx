import React, { Component, useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../assets/logoFHE.png';

const Header = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "GALLERY", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "PROGRAMS", link: "/" },
        { name: "VOLUTEER", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-navBrown py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <img src={logo} className='ml-2 w-14 h-14 text-blue-600' />
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-navBrown md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                                <a href={link.link} className='text-white  hover:text-yellow-950 duration-500'>{link.name}</a>
                            </li>))
                    }
                    <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>DONATE</button>
                </ul>
                {/* button */}
            </div>
        </div>
    );
};

export default Header;