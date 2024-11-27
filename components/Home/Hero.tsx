import React from 'react'

export default function Hero() {
  return (
    <section className=" h-full space-y-6 ml-8  text-left my-[10%]">
        <small className='uppercase'>Welcome To</small>
    <h2 className=" text-5xl md:text-7xl font-bold ">Hotel Paradise</h2>
    <h3 className=" text-4xl md:text-5xl ">Ahmedabad India</h3>
    <p className=" md:max-w-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quibusdam tenetur non maxime praesentium.
    </p>
    <button className="mb-8  bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">Explore More</button>
  </section>
  )
}
