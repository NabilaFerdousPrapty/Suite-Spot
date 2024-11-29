import React from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import RateTable from '../Shared/rateTable';

const Rate = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-2 justify-end'>
                <div className='flex gap-2'>
                    <button className='btn p-1 px-4 rounded-md  bg-[#1570EF] text-white'> Add rate</button>
                    {/* filter button */}
                    <button className='btn p-1 px-4 rounded-md border border-gray-500 bg-white text-gray-700 flex items-center gap-2'><BiFilterAlt /> Filter</button>
                </div>
            </div>
            <RateTable />
        </div>
    );
};

export default Rate;