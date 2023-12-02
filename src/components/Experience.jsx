import React from 'react';
import html from '../assets/experience/html.png';
import css from '../assets/experience/css.png';
import github from '../assets/experience/github.png';
import javascript from '../assets/experience/javascript.png';
import reactImg from '../assets/experience/react.png';
import redux from '../assets/experience/redux.png';
import tailwind from '../assets/experience/tailwind.png';


const Experience = () => {

    const technolgies = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
            alt: "html-img"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
            alt: "css-img"
        },
        {
            id: 3,
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500",
            alt: "javascript-img"
        },
        {
            id: 4,
            src: reactImg,
            title: "React",
            style: "shadow-blue-500",
            alt: "react-img"
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-500",
            alt: "tailwind-img"
        },
        {
            id: 6,
            src: redux,
            title: "Redux",
            style: "shadow-purple-500",
            alt: "redux-img"
        },
        {
            id: 7,
            src: github,
            title: "Github",
            style: "shadow-gray-500",
            alt: "github-img"
        }
    ]

    return (
        <div 
            name="Experience" 
            className='bg-gradient-to-b from-gray-800 to-black w-full '
        >
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>Technologies I've worked with:</p>
                </div>

                {/* Technologies card section */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {technolgies.map(({id, src, title, style, alt}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={alt} className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}    
                </div>
            </div>
        </div>
    )
}

export default Experience;