import Nav from "./components/nav";

export default function Home() {
  return (
    <>
      <div className="relative">
        <img src='https://bucket.theamventure.com/kaleidico-26MJGnCM0Wc-unsplash(1).jpg'  className="absolute h-screen w-screen brightness-20"/>
        <div className="absolute text-white h-screen w-screen text-center items-center flex flex-col">
          <div className="m-auto ">
            
            <p className="font-bold lg:text-5xl md:text-4xl text-2xl">Your Inovative and creative</p>
            <h1 className="font-bold text-black lg:text-8xl md:text-7xl text-5xl text-shadow-lg/10 text-shadow-light-a0">Web Design Agency</h1>
            <p className="inline-block text-2xl bg-primary-a0 hover:bg-surface-a10 text-white font-bold py-2 px-5 rounded mt-[5%]">Learn More</p>

          </div>
          </div>
        <div className="absolute w-full">
          <Nav  />
        </div>
      </div>
    </>
  );
}
