'use client'
import Link from 'next/link'
import { Lineicons } from "@lineiconshq/react-lineicons";
import {  MenuHamburger1Duotone, BarChart4Duotone, ChevronDownDuotone ,Bookmark1Duotone, ChevronLeftCircleDuotone, Home2Duotone, Code1Duotone, HelmetSafety1Duotone, Globe1Duotone, DashboardSquare1Duotone } from "@lineiconshq/free-icons";
import React, { useState }  from 'react';

const links = [
  {name: 'Home', icon: Home2Duotone, link: 'https://home.theamventure.com'},
  {name: 'Code', icon: Code1Duotone, link: 'https://code.theamventure.com'},
  {name: 'Status', icon: BarChart4Duotone, link: 'https://status.theamventure.com'},

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
    <nav className='bg-surface-a10 text-light-a0'>
        
        <div className='relative flex flex-row items-center p-5 lg:h-20 md:h-full w-auto'>
            <div className="rounded-full flex lg:hidden visable w-20 h-20">
                <img className="w-100" src="https://bucket.theamventure.com/Logo/amv/logo.png" />
            </div>
            <p className='text-xl font-bold'>Welcome</p>
            <div className='absolute z-40 h-5  flex flex-col w-[80%]'>
                <div className={navCollapse ? "flex flex-col bg-surface-a10 text-light-a0 mt-8 visible  border-black border-3" : "hidden"}>
                    {/*general links*/}
                    <div className="py-2  inline-block" onClick={() => setGeneralCollapse(generalCollapse === true ? false : true)}>
                        
                        <div className='flex flex-row ps-10'>
                            <p className='font-bold text-lg pr-1 my-auto'>General</p>
                            <Lineicons icon={ChevronDownDuotone} size={20} strokeWidth={2} />
                        </div>
                        
                        <ul className={generalCollapse ? 'block  ps-10' : `hidden`}>
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
                    {/*project links*/}
                    <div className="py-2 inline-block" onClick={() => setProjectsCollapse(projectsCollapse === true ? false : true)}>
                        
                        <div className='flex flex-row ps-10'>
                            <p className='font-bold text-lg pr-1 my-auto'>Projects</p>
                            <Lineicons icon={ChevronDownDuotone} size={20} strokeWidth={2} />
                        </div>
                        
                        <ul className={projectsCollapse ? 'block ps-10' : `hidden`}>
                                {
                                    pLinks.map( (link,i) => 
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

            </div>
                        <Lineicons onClick={() => setNavCollapse(navCollapse === true ? false : true)} className="ml-auto nav-collapse lg:hidden" icon={MenuHamburger1Duotone} size={40} strokeWidth={2} />

        </div>
        
    </nav>
    </>
  )
}