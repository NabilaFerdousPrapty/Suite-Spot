import React from 'react';
import { BiFilterAlt, BiSearch } from 'react-icons/bi';
import DealTable from '../Shared/dealTable';

const Deal = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-2 justify-between'>
                <div className='flex gap-2'>
                    <button className='btn p-1 px-4 rounded-full border border-[#1570EF] bg-[#E8F1FD] text-[#1570EF]'>Ongoing</button>
                    <button className='btn p-1 px-4 rounded-full border border-gray-500 bg-white text-gray-700'>Finished</button>
                </div>

                <div className='flex gap-2'>
                    <button className='btn p-1 px-4 rounded-md  bg-[#1570EF] text-white'> Add deal</button>
                    {/* filter button */}
                    <button className='btn p-1 px-4 rounded-md border border-gray-500 bg-white text-gray-700 flex items-center gap-2'><BiFilterAlt /> Filter</button>

                </div>
            </div>
            <DealTable />

        </div>
    );
};

export default Deal;