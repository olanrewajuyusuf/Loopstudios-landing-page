import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div id='about' className="relative">
        <Navbar />
        <img 
        className="w-full hidden md:block"
        src="/images/desktop/image-hero.jpg" 
        alt="Hero" 
        />
        <img 
        className="w-full md:hidden"
        src="/images/mobile/image-hero.jpg" 
        alt="Hero" 
        />
        <h1 className="hidden md:block absolute text-7xl text-white border-2 top-[35%] left-[11%] py-10 pl-10 pr-16 font-light">IMMERSIVE <br />EXPERIENCES <br />THAT DELIVER</h1>

        {/* ======Mobile view====== */}
        <h1 className="md:hidden absolute w-[90%] text-4xl text-white border-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 font-light">IMMERSIVE <br />EXPERIENCES <br />THAT DELIVER</h1>
    </div>
  )
}

export default Hero