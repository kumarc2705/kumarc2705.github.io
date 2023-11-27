"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Hello I'm 
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            { }
                        </span>
                        <br/>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Kumar',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Chandrasekhar',
                                2000,
                                'Software Engineer',
                                2000,
                                '...@...',
                                2000,
                                'Ford Motor Company',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            // style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        I completed my Bachelors in Electronics and Communication Engineering from BIT MESRA, Ranchi.
                        I did my Master's in computer science from University of Illinois at Chicago.
                        Currently working on tech stacks such as GCP, Airflow, Spring-boot, Tekton etc.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-900 text-white'>Hire Me</button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3'>
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0 py-10">
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image src="/images/hero-image.png"
                            alt="hero image"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;