import React from 'react';
import Image from 'next/image';
import {HiOutlineSearch, HiOutlineHome} from "react-icons/hi";
import {RiFlag2Line} from 'react-icons/ri';
import {MdOutlineOndemandVideo} from 'react-icons/md';
import {AiOutlineShop} from 'react-icons/ai';
import {IoGameControllerOutline} from 'react-icons/io5';

const Header = () => {
  return (
    <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16'>
        {/* Left */}
        <div className='flex min-w-fit'>
            <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png'
            height={30}
            width={30}/>
            <div className='flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500'>
                <HiOutlineSearch size={20}/>
                <input className='hidden lg:inline-flex bg-transparent focus:outline-none' type="text" placeholder='Search Facebook'/>
            </div>
        </div>
        {/* Center */}
        <div className='flex flex-grow justify-center mx-2'>
          <div className='flex items-center'>
            <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
              <HiOutlineHome className='mx-auto' size={25}/>
            </div>
            <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
              <RiFlag2Line className='mx-auto' size={25}/>
            </div>
            <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
              <MdOutlineOndemandVideo className='mx-auto' size={25}/>
            </div>
            <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
              <AiOutlineShop className='mx-auto' size={25}/>
            </div>
            <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
              <IoGameControllerOutline className='mx-auto' size={25}/>
            </div>
          </div>
        </div>
        {/* Right */}
    </div>
  )
};

export default Header;