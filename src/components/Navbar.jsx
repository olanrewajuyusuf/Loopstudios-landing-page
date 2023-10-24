import { useState } from "react"

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="w-full fixed md:py-16 py-10 z-10">
      <div className="lg:w-[78%] w-[90%] mx-auto flex justify-between items-center">
        <img src="/images/logo.svg" alt="Logo" />
        <ul className="md:flex hidden gap-10">
            <li className="grid place-items-center"><a href="#about" className="text-white">About</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
            <li className="grid place-items-center"><a href="#careers" className="text-white">Careers</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
            <li className="grid place-items-center"><a href="#events" className="text-white">Events</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
            <li className="grid place-items-center"><a href="#products" className="text-white">Products</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
            <li className="grid place-items-center"><a href="#supports" className="text-white">Support</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
        </ul>
        <img src="/images/icon-hamburger.svg" alt="hamburger" onClick={()=>setMenu(!menu)} className="md:hidden cursor-pointer"/>

        {/* ======Mobile Navbar====== */}
        {menu && <ul className="md:hidden absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-start px-10 gap-5">
          <div className="absolute top-10 left-[50%] translate-x-[-50%] flex justify-between items-center w-[90%]">
            <img src="/images/logo.svg" alt="Logo" />
            <img src="/images/icon-close.svg" alt="close" onClick={()=>setMenu(!menu)} className="cursor-pointer"/>
          </div>
            <li className="grid place-items-center uppercase text-2xl"><a href="#about" className="text-[#ffffffcc] font-sans font-light">About</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
            <li className="grid place-items-center uppercase text-2xl"><a href="#careers" className="text-[#ffffffcc] font-sans font-light">Careers</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
            <li className="grid place-items-center uppercase text-2xl"><a href="#events" className="text-[#ffffffcc] font-sans font-light">Events</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
            <li className="grid place-items-center uppercase text-2xl"><a href="#products" className="text-[#ffffffcc] font-sans font-light">Products</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
            <li className="grid place-items-center uppercase text-2xl"><a href="#supports" className="text-[#ffffffcc] font-sans font-light">Support</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
        </ul>}
      </div>
    </nav>
  )
}

export default Navbar