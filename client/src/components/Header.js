import { Link } from 'react-router-dom'
import {  } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useState } from 'react';

import logo from '../assets/images/logo.png'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(preShow => !preShow)
    }
return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>
        {/* desktop  */}
        <div className='flex items-center h-full justify-between'>
            <Link to='/'>
                <div className='h-12'>
                    <img className='h-full' src={logo} alt='logo'></img>
                </div>

            </Link>

            <div className='flex items-center gap-4 md:gap-7'>
                <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
                    <Link to='/'>Home</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </nav>
                <div className='text 2xl text-slate-600 relative cursor-pointer'>
                    <BsCartFill />
                    <div className='absolute -top-2 -right-2 text-white bg-red-500 h-4 w-4 m-0 p-0 rounded-full text-xs text-center'>0</div>
                </div>
                <div className='text-slate-600 cursor-pointer' onClick={handleShowMenu}>
                    <div className='text-2xl'>
                        <HiOutlineUserCircle />
                    </div>
                    {
                        showMenu && (
                            <div className='absolute right-2 py-2 px-2 bg-white shadow drop-shadow-md flex flex-col'>
                                <Link to='/newproduct' className='whitespace-nowrap'>new product</Link>
                                <Link to='/login' className='whitespace-nowrap'>login</Link >
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        {/* mobile */}
    </header>

)
}

export default Header