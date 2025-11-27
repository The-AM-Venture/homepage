'use client'
import React from 'react';

export default function Services() {
  return (
    <>
        <section className='mx-5 md:mx-0'>
            <h2 className='font-bold text-primary-a0 lg:text-8xl md:text-7xl text-5xl mb-[10%] text-shadow-lg/10 text-shadow-light-a0 text-center'>Services</h2>
                <div className='pt-5 flex flex-col md:flex-row justify-center'>
                    <div className='flex flex-col xl:w-[30%] my-auto mr-4'>
                        <p className='font-bold text-4xl sm:text-4xl md:text-5xl 2xl:text-6xl mb-[10%]'>Creative Web design Team</p>
                        <p className='text-lg sm:text-xl md:text-lg lg:text-3xl text-justify'>At The AM Venture, we understand that your website is the face of your business in the digital world. Our seasoned team of designers and developers is dedicated to creating a unique online identity that perfectly encapsulates your brand's essence. From the moment visitors land on your site, they'll be immersed in an engaging and cohesive online experience.</p>
                    </div>
                    <img className='rounded-xl w-[35em] mt-5 md:mt-0 h-full' src="/image-post.svg" />
                </div>

                <div className='pt-5 flex flex-col md:flex-row justify-center mt-[5%]'>
                        <p className='md:hidden font-bold text-4xl sm:text-4xl md:text-5xl 2xl:text-6xl mb-[10%]'>Inovative Web Development </p>
                    <img className='rounded-xl w-[35em] md:mr-4 h-full' src="/software-engineer.svg" />
                    <div className='flex flex-col xl:w-[30%]'>
                        <p className='hidden md:block font-bold text-4xl sm:text-4xl md:text-5xl 2xl:text-6xl mb-[10%]'>Inovative Web Development </p>
                        <p className='text-lg sm:text-xl md:text-lg lg:text-3xl text-justify'>Behind every beautiful website is a robust framework. Our skilled developers are masters of their craft, employing the latest web technologies to bring your vision to life. Whether you need an e-commerce platform, a blog, or a dynamic corporate site, we have the expertise to deliver. Rest assured, your website will be responsive, secure, and optimized for search engines.</p>
                    </div>
                </div>
        </section>
    </>
  )
}
