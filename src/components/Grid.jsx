// import React from 'react'

const Grid = ({image, title, title2}) => {
  return (
    <div className="relative">
        <img src={image} alt={title} className="w-full"/>
        <span 
        className="absolute top-0 left-0 hover:bg-[#ffffffab] hover:text-black cursor-pointer font-light flex justify-end md:pl-[15%] md:pb-[15%] pb-3 pl-5 flex-col w-full h-full text-white md:text-3xl text-2xl"
        >
          <h3>{title}</h3>
          <h3>{title2}</h3>
        </span>
    </div>
  )
}

export default Grid
