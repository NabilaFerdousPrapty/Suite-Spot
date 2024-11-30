import React from 'react'

export default function Hero() {
  return (
    <section className=" h-full space-y-6 ml-8  text-left my-[10%]">
        <small className='uppercase'>Welcome To</small>
    <h2 className=" text-5xl md:text-7xl font-bold ">Suite-Spot</h2>
    <p className=" md:max-w-lg">
    Suite-Spot offers a curated selection of top hotels for every traveler. Book your perfect stay with ease and enjoy comfort wherever you go.
    </p>
    <button className="mb-8  bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700">Explore More</button>
  </section>
  )
}
