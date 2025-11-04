'use client'
import Link from 'next/link'
import React from 'react';

const links = [
  {img: 'https://bucket.theamventure.com/Projects/Val.png', link: 'google.com'},
  {img: 'https://bucket.theamventure.com/Projects/AM.png', link: 'google.com'},
  {img: 'https://bucket.theamventure.com/Projects/plains.png', link: 'google.com'},

];

export default function Recentprojects() {
  return (
    <>
        <div className='mt-[10%] relative '>
            <h2 className='font-bold text-black lg:text-8xl md:text-7xl text-5xl text-shadow-lg/10 text-shadow-light-a0 text-center'>Recent Projects</h2>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-4 justify-center mt-[10%] mb-[40%] w-[90%] mx-auto'>
                {
                    links.map((link,i) =>
                        <Link key={i} className='flex flex-row' href={link.link} target="_blank" rel="noopener noreferrer">
                            <img className='rounded-xl shadow-xl hover:shadow-primary-a0/50' key={i} src={link.img} />
                        </Link>
                    )
                }
            </div>
        </div>
    </>
  )
}