import Stats from '@/components/user-dashboard/stats';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const page = () => {
    return (
        <div className='bg-[#f5f5f5] rounded  text-black'>
            <Stats />

            {/* Rooms */}
            <div className='bg-white rounded text-black p-3 my-4'>
                <h1 className='text-xl mb-4'>Rooms</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

                    <div className='border-2 border-gray-300 p-4 rounded-xl text-[#5D6679] space-y-2'>
                        <div className='flex justify-between items-center'>
                            <p className="bg-[#B6E9D1] w-14 text-center rounded-md text-[#0D824B] p-1 text-xs"><span>2</span> Deals</p>
                            <button><BsThreeDotsVertical /></button>
                        </div>
                        <div className='text-[#5D6679'>
                            <p className='text-xl'>Single sharing</p>
                            <p className='text-gray-500'><span className='text-gray-600 text-xl'>2</span>/30</p>
                            <p className='text-gray-500'><span className='text-[#1366D9] text-2xl'>$ 568</span>/ day</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default page;