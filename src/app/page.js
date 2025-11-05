import Nav from "./components/nav";
import Recentprojects from "./components/recentprojects";import { Lineicons } from "@lineiconshq/react-lineicons";
import { ChevronDownCircleDuotone } from "@lineiconshq/free-icons";


export default function Home() {
  return (
    <>
      <div className="relative h-full w-full">
        <img src='https://bucket.theamventure.com/kaleidico-26MJGnCM0Wc-unsplash(1).jpg'  className="absolute h-screen w-screen brightness-20"/>
        <div className="absolute text-white h-screen w-screen text-center items-center flex flex-col">
          <div className="my-auto">
            <p className="font-bold lg:text-5xl md:text-4xl text-2xl">Your Inovative and creative</p>
            <h1 className="font-bold text-black lg:text-8xl md:text-7xl text-5xl text-shadow-lg/10 text-shadow-light-a0">Web Designer & Developer</h1>
            <p className="lg:text-4xl md:text-2xl text-xl mt-4">Designing, Developing, and Maintaing Your Online Presence</p>
          </div>
        </div>
        
        <div className="absolute z-40 w-full">
          <Nav  />
        </div>
        <div className="absolute bottom-0 left-0 md:h-90 h-70 w-full">
        <Lineicons className="relative animate-bounce mx-auto text-primary-a0" icon={ChevronDownCircleDuotone} size={70} strokeWidth={2} />
        </div>
        <div className="relative triangles"></div>
      </div>
        
      <Recentprojects />
    </>
  );
}
