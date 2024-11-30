
import React from 'react';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { IoRestaurant } from 'react-icons/io5';
import { PiRankingFill } from 'react-icons/pi';
import { FaSpa } from "react-icons/fa6";
import { PiCheersFill } from "react-icons/pi";
import { LiaDumbbellSolid } from 'react-icons/lia';

const Services = () => {
    return (
        <div className="mt-12 px-4 text-black">
            <p className="sub-title text-center text-[#3E48A8]">Our Services</p>
            <h1 className="text-3xl font-bold text-center my-7">
                Explore Our <span className="text-[#3E48A8]">Services</span>
            </h1>

            {/* services card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border p-6 py-8 text-center group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                    <div className="flex justify-center">
                        <BsFillBuildingsFill className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                    </div>
                    <h1 className="font-bold mb-3 group-hover:text-white transition duration-300">
                        Rooms & Apartment
                    </h1>
                    <p className="group-hover:text-white transition duration-300">
                        Experience luxurious rooms and fully furnished apartments designed for ultimate comfort and convenience.
                    </p>
                </div>
                <div className="border p-6 py-8 text-center group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                    <div className="flex justify-center">
                        <PiRankingFill className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                    </div>
                    <h1 className="font-bold mb-3 group-hover:text-white transition duration-300">
                        Sports & Gaming
                    </h1>
                    <p className="group-hover:text-white transition duration-300">
                        Enjoy thrilling sports facilities and state-of-the-art gaming zones for all age groups.
                    </p>
                </div>
                <div className="border p-6 py-8 text-center group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                    <div className="flex justify-center">
                        <IoRestaurant className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                    </div>
                    <h1 className="font-bold mb-3 group-hover:text-white transition duration-300">
                        Food & Restaurant
                    </h1>
                    <p className="group-hover:text-white transition duration-300">
                        Savor exquisite cuisines prepared by top chefs in our world-class restaurants.
                    </p>
                </div>
                <div className="border p-6 py-8 text-center group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                    <div className="flex justify-center">
                        <FaSpa className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                    </div>
                    <h1 className="font-bold mb-3 group-hover:text-white transition duration-300">
                        Spa & Wellness
                    </h1>
                    <p className="group-hover:text-white transition duration-300">
                        Rejuvenate your body and mind with our professional spa and wellness treatments.
                    </p>
                </div>
                <div className="border p-6 py-8 text-center group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                    <div className="flex justify-center">
                        <PiCheersFill className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                    </div>
                    <h1 className="font-bold mb-3 group-hover:text-white transition duration-300">
                        Bar & Lounge
                    </h1>
                    <p className="group-hover:text-white transition duration-300">
                        Relax and unwind with premium drinks and a vibrant atmosphere in our bar and lounge.
                    </p>
                </div>
                <div className="border p-6 py-8 text-center group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                    <div className="flex justify-center">
                        <LiaDumbbellSolid className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                    </div>
                    <h1 className="font-bold mb-3 group-hover:text-white transition duration-300">
                        Gym & Fitness
                    </h1>
                    <p className="group-hover:text-white transition duration-300">
                        Stay fit and healthy with our cutting-edge gym facilities and fitness programs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
