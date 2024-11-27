import React from 'react';
import './rooms.css';
import Image from 'next/image';
import hotel1 from '../../public/image/hotel1.jpeg';
import { TbBathFilled } from 'react-icons/tb';
import { FaBed } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa6';

const Rooms = () => {
    return (
        <div className='px-4'>
            <p className='sub-title text-center text-[#3E48A8]'>Our Rooms</p>
            <h1 className='text-3xl font-bold text-center my-7'>Explore Our <span className='text-[#3E48A8]'>Rooms</span></h1>

            {/* hotel Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {/* single card */}
                <div className='w-full border shadow-md'>
                    <Image
                        src={hotel1}
                        alt={`hotel image`}
                        className="w-full"
                    />
                    <div className='p-6 space-y-4'>
                        <h1 className='text-2xl font-bold'>Junior Suite</h1>
                        <div className='text-[#6d6d70] flex justify-between 
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
                <div className='w-full border shadow-md'>
                    <Image
                        src={hotel1}
                        alt={`hotel image`}
                        className="w-full"
                    />
                    <div className='p-6 space-y-4'>
                        <h1 className='text-2xl font-bold'>Executive Suite</h1>
                        <div className='text-[#6d6d70] flex justify-between 
                        '>
                            <p className='flex items-center'><TbBathFilled className='text-[#3E48A8] mr-2' />
                                3 Bath</p>
                            <p className='flex items-center'><FaBed className='text-[#3E48A8] mr-2' />
                                4 Beds</p>

                            <p className='flex items-center'><FaWifi className='text-[#3E48A8] mr-2' />
                                Wifi</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptate!</p>
                        <p className='text-xl font-bold'>$85 / Per Night</p>
                        <button className='button w-full bg-[#3E48A8] text-white p-2'>Book Now</button>
                    </div>
                </div>
                <div className='w-full border shadow-md'>
                    <Image
                        src={hotel1}
                        alt={`hotel image`}
                        className="w-full"
                    />
                    <div className='p-6 space-y-4'>
                        <h1 className='text-2xl font-bold'>Super Deluxe</h1>
                        <div className='text-[#6d6d70] flex justify-between 
                        '>
                            <p className='flex items-center'><TbBathFilled className='text-[#3E48A8] mr-2' />
                                4 Bath</p>
                            <p className='flex items-center'><FaBed className='text-[#3E48A8] mr-2' />
                                6 Beds</p>

                            <p className='flex items-center'><FaWifi className='text-[#3E48A8] mr-2' />
                                Wifi</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptate!</p>
                        <p className='text-xl font-bold'>$100 / Per Night</p>
                        <button className='button w-full bg-[#3E48A8] text-white p-2'>Book Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Rooms;