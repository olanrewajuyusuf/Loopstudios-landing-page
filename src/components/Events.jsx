import Grid from "./Grid";

const Events = () => {
  return (
    <>
    <div id="events" className="lg:w-[78%] w-[90%] hidden md:block mx-auto pb-28">
        <div className="flex justify-between items-center">
            <h1 className="text-5xl font-light text-[#696969]">OUR CREATIONS</h1>
            <button className="py-2 px-8 hover:bg-black hover:text-white border-[1px] border-black tracking-widest">SEE ALL</button>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 my-14">
          <Grid image="images/desktop/image-deep-earth.jpg" title="DEEP" title2="EARTH" />
          <Grid image="images/desktop/image-night-arcade.jpg" title="NIGHT" title2="ARCADE" />
          <Grid image="images/desktop/image-soccer-team.jpg" title="SOCCER" title2="TEAM VR" />
          <Grid image="images/desktop/image-grid.jpg" title="THE" title2="GRID" />
          <Grid image="images/desktop/image-from-above.jpg" title="FROM UP" title2="ABOVE VR" />
          <Grid image="images/desktop/image-pocket-borealis.jpg" title="POCKET" title2="BOREALIS" />
          <Grid image="images/desktop/image-curiosity.jpg" title="THE" title2="CURIOSITY" />
          <Grid image="images/desktop/image-fisheye.jpg" title="MAKE IT" title2="FISHEYE" />
        </div>
    </div>
    <div id="events" className="md:hidden mx-auto py-28 px-5 flex justify-center items-center flex-col">
        <h1 className="text-3xl font-light text-[#696969]">OUR CREATIONS</h1>
        <div className="my-10 flex justify-center items-center flex-col gap-5">
          <Grid image="images/mobile/image-deep-earth.jpg" title="DEEP" title2="EARTH" />
          <Grid image="images/mobile/image-night-arcade.jpg" title="NIGHT" title2="ARCADE" />
          <Grid image="images/mobile/image-soccer-team.jpg" title="SOCCER" title2="TEAM VR" />
          <Grid image="images/mobile/image-grid.jpg" title="THE" title2="GRID" />
          <Grid image="images/mobile/image-from-above.jpg" title="FROM UP" title2="ABOVE VR" />
          <Grid image="images/mobile/image-pocket-borealis.jpg" title="POCKET" title2="BOREALIS" />
          <Grid image="images/mobile/image-curiosity.jpg" title="THE" title2="CURIOSITY" />
          <Grid image="images/mobile/image-fisheye.jpg" title="MAKE IT" title2="FISHEYE" />
        </div>
        <button className="py-2 px-8 hover:bg-black hover:text-white border-[1px] border-black tracking-widest">SEE ALL</button>
    </div>
    </>
  )
}

export default Events