import React from 'react';

const Stats = () => {
    return (
        <div>
            <div className='bg-white shadow-md p-4 rounded-md'>
                <h1 className='text-xl mb-4'>Overview</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                    <div>
                        <p className='text-sm text-gray-400'>Today's</p>
                        <p className='text-gray-600'>Check-in <span className='text-[#1366D9] text-xl font-semibold ml-2'>23</span></p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-400'>Today's</p>
                        <p className='text-gray-600'>Check-out <span className='text-[#1366D9] text-xl font-semibold ml-2'>13</span></p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-400'>Total</p>
                        <p className='text-gray-600'>In hotel <span className='text-[#1366D9] text-xl font-semibold ml-2'>60</span></p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-400'>Total</p>
                        <p className='text-gray-600'>Available room <span className='text-[#1366D9] text-xl font-semibold ml-2'>60</span></p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-400'>Total</p>
                        <p className='text-gray-600'>Occupied room<span className='text-[#1366D9] text-xl font-semibold ml-2'>90</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;