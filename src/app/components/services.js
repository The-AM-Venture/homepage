'use client'
import Link from 'next/link'
import React from 'react';
const services = [
  {service: 'Website Maintenance', description: 'Website service ongoing tasks such as updating content, fixing bugs, and ensuring security to keep a website running smoothly and up-to-date.', link: 'google.com'},
  {service: 'Website Hosting', description: "Helping businesses' search engine rankings for enhanced online visibility.", link: 'google.com'},
  {service: 'Consultation & Audits', description: 'Assisting you in determining the most suitable options for your needs through personalized one-on-one sessions.', link: 'google.com'}

];

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

                <h3 className='text-4xl font-bold mt-[5%] mb-[5%] md:ml-[25%]'>We can also help with,</h3>
                <div className='flex flex-col md:flex-row justify-center mb-[5%]'>
                    {
                        services.map((service,i) =>
                        <div className='flex flex-col card-effect mt-5 md:mt-0 rounded-xl h-[20em] w-[20em] bg-surface-a10 p-5 mx-auto md:mx-3'>
                            <p className='text-2xl font-bold pb-3'>{service.service}</p>
                            <p className='text-lg'>{service.description}</p>
                            <Link className='bg-primary-a0 hover:bg-surface-a0 text-white font-bold py-2 px-4 rounded mt-auto w-[50%] text-center' href={service.link} target="_blank" rel="noopener noreferrer">
                                <p className="font-bold text-lg">{service.link}</p>  
                            </Link >
                        </div>

                        )

                    }
                </div>
        </section>
    </>
  )
}
