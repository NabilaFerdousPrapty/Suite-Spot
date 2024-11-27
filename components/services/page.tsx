import React from 'react';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { PiRankingFill } from 'react-icons/pi';

const Services = () => {
    return (
        <div className="mt-12 px-4">
            <p className="sub-title text-center text-[#3E48A8]">Our Services</p>
            <h1 className="text-3xl font-bold text-center my-7">
                Explore Our <span className="text-[#3E48A8]">Services</span>
            </h1>

            {/* services card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="border p-6 py-8 text-center my-4 group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                    <div className="flex justify-center">
                        <BsFillBuildingsFill className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                    </div>
                    <h1 className="font-bold mb-3 group-hover:text-white transition duration-300">
                        Rooms & Apartment
                    </h1>
                    <p className="group-hover:text-white transition duration-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, a?
                    </p>
                </div>
                <div className="border p-6 py-8 text-center my-4 group hover:bg-[#3E48A8] hover:text-white transition duration-300">
                    <div className="flex justify-center">
                        <PiRankingFill className="text-[#3E48A8] text-4xl mb-8 group-hover:text-white transition duration-300" />
                    </div>
                    <h1 className="font-bold mb-3 group-hover:text-white transition duration-300">
                        Sports & Gaming
                    </h1>
                    <p className="group-hover:text-white transition duration-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, a?
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Services;