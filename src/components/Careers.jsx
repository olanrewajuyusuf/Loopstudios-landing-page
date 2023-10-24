
const Careers = () => {
  return (
    <div id='careers' className="relative">
        <div className="md:w-[78%] w-[90%] mx-auto md:my-[150px] mt-[150px] mb-20">
            <img src="images/desktop/image-interactive.jpg" alt="Interactive" className="hidden md:block"/>
            <img src="images/desktop/image-interactive.jpg" alt="Interactive" className="md:hidden"/>
        </div>
        <div className="hidden md:block w-[600px] p-[70px] absolute right-28 top-[40%] bg-white font-light">
            <h2 className="text-5xl text-[#696969]">THE LEADER IN <br/>INTERACTIVE VR</h2>
            <p className="text-[15px] mt-8 text-[#8c8c8c]">Founded in 2011, Loopstudios has been producing world-class virtual reality 
               projects for some of the best companies around the globe. Our award-winning 
               creations have transformed businesses through digital experiences that bind 
               to their brand.</p>
        </div>

        {/* ======Mobile view====== */}
        <div className="md:hidden w-[90%] mx-auto text-center bg-white font-light">
            <h2 className="text-3xl text-[#696969]">THE LEADER IN <br/>INTERACTIVE VR</h2>
            <p className="text-[15px] mt-8 text-[#8c8c8c]">Founded in 2011, Loopstudios has been producing world-class virtual reality 
               projects for some of the best companies around the globe. Our award-winning 
               creations have transformed businesses through digital experiences that bind 
               to their brand.</p>
        </div>
    </div>
  )
}

export default Careers