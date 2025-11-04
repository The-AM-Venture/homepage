'use client'
import Link from 'next/link'
import { Lineicons } from "@lineiconshq/react-lineicons";
import {  MenuHamburger1Duotone, BarChart4Duotone, ChevronDownDuotone ,Bookmark1Duotone, ChevronLeftCircleDuotone, Home2Duotone, Code1Duotone, HelmetSafety1Duotone, Globe1Duotone, DashboardSquare1Duotone } from "@lineiconshq/free-icons";
import React, { useState }  from 'react';

const links = [
  {name: 'Home', icon: Home2Duotone, link: 'https://home.theamventure.com'},
  {name: 'About', icon: Code1Duotone, link: 'https://code.theamventure.com'},
  {name: 'portfolio', icon: BarChart4Duotone, link: 'https://status.theamventure.com'},
  {name: 'Web Servies', icon: BarChart4Duotone, link: 'https://status.theamventure.com'},
  {name: 'Blog', icon: BarChart4Duotone, link: 'https://status.theamventure.com'},

];

const pLinks = [
  {name: 'My personal website', icon: Globe1Duotone, link: 'https:/alfredmalone.com'},
  {name: 'Val Bui', icon: Globe1Duotone, link: 'https://valbui.com'},

];

export default function Nav() {
  const [navCollapse, setNavCollapse] = useState(false);
  const [generalCollapse, setGeneralCollapse] = useState(false);
  const [projectsCollapse, setProjectsCollapse] = useState(false);
  return (
    <>
    <nav className='relative text-light-a0 flex flex-row justify-between items-center h-20 w-auto px-5'>
        <div className="rounded-full flex lg:w-[5%] md:w-[15%] w-[20%]">
            <img className="w-100" src="https://bucket.theamventure.com/Logo/amv/logo.png" />
        </div>
        <div className='lg:flex flex-row m-auto hidden'>
            
                {
                    links.map((link,i) => 
                    <Link  key={i} className='flex flex-row' href={link.link} target="_blank" rel="noopener noreferrer">
                        <p className="font-bold text-lg px-3 my-auto">{link.name}</p>
                    </Link >
                    )
                }

            {/*general links*/}
            <div className="py-2  inline-block" onClick={() => setGeneralCollapse(generalCollapse === true ? false : true)}>
                <div className='flex flex-row px-3'>
                    <p className='font-bold text-lg pr-1 my-auto'>General</p>
                        <Lineicons icon={ChevronDownDuotone} size={20} strokeWidth={2} />
                </div>
                <ul className={generalCollapse ? 'absolute  ps-10' : `hidden`}>
                    {
                                    links.map( (link,i) => 
                                        <li className='px-4 py-2' key={i} >
                                            <div className='items-center'>
                                                <Link className='flex flex-row' href={link.link} target="_blank" rel="noopener noreferrer">
                                                    <Lineicons icon={link.icon} size={20} strokeWidth={2} />
                                                    <p className="ml-1 text-lg">{link.name}</p>
                                                </Link >
                                            </div>
                                        </li>
                                    )
                    }
                </ul>
            </div>
        </div>
            
                <Link className='lg:flex hidden flex-row bg-primary-a0 hover:bg-surface-a0 text-white font-bold py-2 px-4 rounded my-auto' href={"#"} target="_blank" rel="noopener noreferrer">
                    <p className="font-bold text-lg">Contact</p>  
                </Link >
      
    {/* Mobile view */}
        <Lineicons onClick={() => setNavCollapse(navCollapse === true ? false : true)} className="ml-auto nav-collapse lg:hidden" icon={MenuHamburger1Duotone} size={40} strokeWidth={2} />
        <div className={ navCollapse ? 'absolute inset-y-0 left-0 inset-y-0 right-0 flex flex-row items-center w-full md:mt-[10%] mt-[40%] animate-spine' : "hidden"} >
            <div className='flex flex-col mx-auto w-[80%]'>
                <div className={navCollapse ? "flex flex-col bg-surface-a10 text-light-a0 mt-8 visible  border-black border-3" : "hidden"}>
                    {
                    links.map((link,i) => 
                    <Link key={i} className='flex flex-row' href={link.link} target="_blank" rel="noopener noreferrer">
                        <p className="font-bold text-lg px-3 my-auto">{link.name}</p>
                    </Link >
                    )
                    }
                </div>

                <Link className='flex flex-row bg-primary-a0 hover:bg-surface-a10 text-white font-bold py-2 px-4 rounded my-auto mt-[4%]' href={"#"} target="_blank" rel="noopener noreferrer">
                    <p className="font-bold text-lg">Contact</p>  
                </Link >

            </div>      

        </div>
        
    </nav>
    </>
  )
}