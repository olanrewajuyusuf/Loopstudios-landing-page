
const Footer = () => {
  return (
    <footer className="bg-black py-16 md:py-10">
        <div className="lg:w-[78%] w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
            <img src="/images/logo.svg" alt="Logo" />
            <ul className="flex flex-col md:flex-row gap-5 md:gap-7 mt-5">
                <li className="grid place-items-center"><a href="#about" className="text-white">About</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
                <li className="grid place-items-center"><a href="#careers" className="text-white">Careers</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
                <li className="grid place-items-center"><a href="#events" className="text-white">Events</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
                <li className="grid place-items-center"><a href="#products" className="text-white">Products</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
                <li className="grid place-items-center"><a href="#supports" className="text-white">Support</a><div id="shade" className="w-6 h-[2px] mt-[5px]"></div></li>
            </ul>
        </div>
        <div className="flex flex-col items-center md:items-end gap-5">
            <div className="flex items-center justify-center gap-4">
                <span className="shade">
                    <img src="images/icon-facebook.svg" alt="faceebook" />
                    <div className="w-[25px] h-[2px] mt-2" id="line"></div>
                </span>
                <span className="shade">
                    <img src="images/icon-twitter.svg" alt="faceebook" />
                    <div className="w-[25px] h-[2px] mt-2" id="line"></div>
                </span>
                <span className="shade">
                    <img src="images/icon-pinterest.svg" alt="faceebook" />
                    <div className="w-[25px] h-[2px] mt-2" id="line"></div>
                </span>
                <span className="shade">
                    <img src="images/icon-instagram.svg" alt="faceebook" />
                    <div className="w-[25px] h-[2px] mt-2" id="line"></div>
                </span>
            </div>
            <p className="text-[#696969]">&copy; 2021 Loopstudios. All right reserved.</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer