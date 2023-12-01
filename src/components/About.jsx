import React from 'react';

const About = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-20'>
                My life's motto 'Never stop learning, because wisdom gives you confidence and confidence makes you feel powerful'. 
                Taking responsibilities, dealing under pressure situations has made me strong over the years and that is how I define myself. 
            </p>

            <br/>

            <p className='text-xl'>
                I have previously worked with 2 startups where I have contributed my work in the frontend domain.
                Looking forward to new challenges and learning new tech stacks.
                Scroll down and look at my projects, feel free to connect with me over socials.
            </p>
        </div>
    </div>
  )
}

export default About;