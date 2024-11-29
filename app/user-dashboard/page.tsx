import Stats from '@/components/user-dashboard/stats';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const page = () => {
    return (
        <div className='bg-[#f5f5f5] rounded  text-black p-4'>
            <Stats />

            {/* Rooms */}
            <div className='bg-white rounded-md text-black p-3 my-4 shadow-sm'>
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
                    <div className='border-2 border-gray-300 p-4 rounded-xl text-[#5D6679] space-y-2'>
                        <div className='flex justify-between items-center'>
                            <p className="bg-[#B6E9D1] w-14 text-center rounded-md text-[#0D824B] p-1 text-xs"><span>2</span> Deals</p>
                            <button><BsThreeDotsVertical /></button>
                        </div>
                        <div className='text-[#5D6679'>
                            <p className='text-xl'>Double sharing</p>
                            <p className='text-gray-500'><span className='text-gray-600 text-xl'>2</span>/35</p>
                            <p className='text-gray-500'><span className='text-[#1366D9] text-2xl'>$ 1068</span>/ day</p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-300 p-4 rounded-xl text-[#5D6679] space-y-2'>
                        <div className='flex justify-end items-center'>
                            {/* <p className="bg-[#B6E9D1] w-14 text-center rounded-md text-[#0D824B] p-1 text-xs"><span></span> </p> */}
                            <button><BsThreeDotsVertical /></button>
                        </div>
                        <div className='text-[#5D6679'>
                            <p className='text-xl'>Triple sharing</p>
                            <p className='text-gray-500'><span className='text-gray-600 text-xl'>2</span>/25</p>
                            <p className='text-gray-500'><span className='text-[#1366D9] text-2xl'>$ 1,568</span>/ day</p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-300 p-4 rounded-xl text-[#5D6679] space-y-2'>
                        <div className='flex justify-end items-center'>
                            {/* <p className="bg-[#B6E9D1] w-14 text-center rounded-md text-[#0D824B] p-1 text-xs"><span>2</span> Deals</p> */}
                            <button><BsThreeDotsVertical /></button>
                        </div>
                        <div className='text-[#5D6679'>
                            <p className='text-xl'>VIP Suit</p>
                            <p className='text-gray-500'><span className='text-gray-600 text-xl'>4</span>/10</p>
                            <p className='text-gray-500'><span className='text-[#1366D9] text-2xl'>$ 2,568</span>/ day</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Room Status and Floor Status */}
            <div className='flex flex-col lg:flex-row gap-4 '>
                <div className='w-full lg:w-7/12 bg-white rounded-md text-black p-3 my-4 shadow-sm'>
                    <h1 className='text-xl mb-4'>Room Status</h1>
                    <div className='grid grid-cols-2 gap-8 text-[#858D9D]'>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-[#5D6679]'>
                                <p>Occupied rooms</p>
                                <p>104</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Clean</p>
                                <p>90</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Dirty</p>
                                <p>4</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Inspected</p>
                                <p>60</p>
                            </div>
                        </div>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-[#5D6679]'>
                                <p>Occupied rooms</p>
                                <p>104</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Clean</p>
                                <p>90</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Dirty</p>
                                <p>4</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Inspected</p>
                                <p>60</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-5/12 bg-white rounded-md text-black p-3 my-4 shadow-sm'>
                    <h1 className='text-xl mb-4'>Floor Status</h1>
                    <h1>Charts will display here</h1>
                </div>
            </div>

        </div>
    );
};

export default page;