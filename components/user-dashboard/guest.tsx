import React from 'react';
import { BiFilterAlt, BiSearch } from "react-icons/bi";
import GuestTable from '../Shared/guestTable';

const Guest = () => {
    return (
        <div>
            Guest Home
            <div className='flex flex-col lg:flex-row gap-2 justify-between'>
                <div className='flex gap-2'>
                    <button className='btn p-1 px-4 rounded-full border border-[#1570EF] bg-[#E8F1FD] text-[#1570EF]'>Check in</button>
                    <button className='btn p-1 px-4 rounded-full border border-gray-500 bg-white text-gray-700'>Check out</button>
                </div>

                <div className='flex gap-2'>
                    <button className='btn p-1 px-4 rounded-md border border-gray-500 bg-white text-gray-700 flex items-center gap-2'><BiFilterAlt /> Filter</button>
                    {/* <input type="text" name="search" id="" /> */}
                    {/* Search Box */}
                    <div className="relative w-full max-w-xs">
                        <input
                            type="text"
                            name="search"
                            placeholder="Search by room number"
                            className="w-full p-2 pl-10 rounded-md border border-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1570EF]"
                        />
                        <BiSearch className="absolute top-2 left-3 text-gray-500" size={20} />
                    </div>

                </div>
            </div>

            <GuestTable />
        </div>
    );
};

export default Guest;