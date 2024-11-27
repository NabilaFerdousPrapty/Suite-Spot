import React from 'react';
import './ourRoom.css';
import Image from 'next/image';
import hotel1 from '../../public/image/hotel1.jpeg';
import { TbBathFilled } from 'react-icons/tb';
import { FaBed } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa6';

const OurRoom = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <p className='sub-title text-center text-[#3E48A8]'>Our Rooms</p>
            <h1 className='text-3xl font-bold text-center my-7'>Explore Our <span className='text-[#3E48A8]'>Rooms</span></h1>

            {/* hotel Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div className='w-full border'>
                    <Image
                        src={hotel1}
                        alt={`hotel image`}
                        className="w-full"
                    />
                    <div className='p-4 space-y-4'>
                        <h1 className='text-2xl font-bold'>Junio Suite</h1>
                        <div className='text-gray-500 flex justify-between font-semibold
                        '>
                            <p className='flex items-center'><TbBathFilled className='text-[#3E48A8] mr-2' />
                                2 Bath</p>
                            <p className='flex items-center'><FaBed className='text-[#3E48A8] mr-2' />
                                2 Beds</p>

                            <p className='flex items-center'><FaWifi className='text-[#3E48A8] mr-2' />
                                Wifi</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptate!</p>
                        <p className='text-xl font-bold'>$50 / Per Night</p>
                        <button className='button w-full bg-[#3E48A8] text-white p-2'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurRoom;