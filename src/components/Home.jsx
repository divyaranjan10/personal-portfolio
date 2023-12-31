import React from 'react';
import profileImg from '../assets/profileImage.jpeg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full pb-4 bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl font-bold sm:text-7xl text-white'>I specialize in Frontend Dev.</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I'm a frontend developer experienced in various technologies like HTML, CSS, JS, React, Redux and Tailwind CSS.
                    Looking forward for new challenges.
                    Scroll down and look at my projects, feel free to connect with me over socials.
                </p>
                <div>
                    <Link to='Portfolio' smooth duration={400} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img 
                    src={profileImg} 
                    alt='profile-click' 
                    className='rounded-2xl mx-auto w-2/3 md:w-full'
                />
            </div>
        </div>
    </div>
  )
}

export default Home;