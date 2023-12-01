import React from 'react';
import foodDeliveryApp from '../assets/portfolio/food-delivery-app.png';
import { Link } from 'react-router-dom';

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: foodDeliveryApp,
            demolink: "https://food-delivery-app-neon.vercel.app/",
            codelink: "https://github.com/divyaranjan10/food-delivery-app"
        },
        {
            id: 2,
            src: foodDeliveryApp,
            demolink: "https://food-delivery-app-neon.vercel.app/",
            codelink: "https://github.com/divyaranjan10/youtube-clone-react"
        },
        {
            id: 3,
            src: foodDeliveryApp,
            demolink: "https://food-delivery-app-neon.vercel.app/",
            codelink: "https://github.com/divyaranjan10/food-delivery-app"
        }
    ]

    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check some of the listed projects of mine</p>
                </div>

                

                {/* this is the structure for the whole project-card */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({id, src, codelink, demolink}) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'/>
                                <div className='flex items-center justify-center'>
                                    <a href={demolink} target='_blank' rel="noreferrer">
                                        <button className='w-1/2 px-6 py-3 m-4 hover:scale-105'>
                                            Demo
                                        </button>
                                    </a>

                                    <a href={codelink} target='_blank' rel="noreferrer">    
                                        <button className='w-1/2 px-6 py-3 m-4 hover:scale-105'>
                                            Code
                                        </button>
                                    </a>                               
                                </div>
                            </div>
                        ))
                    }                
                </div>
            </div>
        </div>
    )
}

export default Portfolio;