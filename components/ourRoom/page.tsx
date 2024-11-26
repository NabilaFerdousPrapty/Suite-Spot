import React from 'react';
import './ourRoom.css';
import Image from 'next/image';
import hotel1 from '../../public/image/hotel1.jpeg';

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
                    <div className='p-4'>
                        <h1>Hotel 1</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurRoom;