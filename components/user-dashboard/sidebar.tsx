import React from 'react';
import { FaTachometerAlt, FaConciergeBell, FaUsers, FaHotel, FaHandshake, FaDollarSign } from "react-icons/fa";


const Sidebar = () => {
    return (
        <div>
            <aside className="w-64 text-gray-600 flex flex-col">
                <div className="py-4 px-6 text-2xl font-bold border-b border-blue-700">
                    Suite-Spot
                </div>
                <nav className="flex-1">
                    <ul className="space-y-2 mt-4">
                        <li className="px-4 py-2 hover:bg-[#E8F1FD] hover:text-[#1366D9] flex items-center">
                            <FaTachometerAlt className="mr-3" />
                            Dashboard
                        </li>
                        <li className="px-4 py-2 hover:bg-[#E8F1FD] hover:text-[#1366D9] flex items-center">
                            <FaConciergeBell className="mr-3" />
                            Frontdesk
                        </li>
                        <li className="px-4 py-2 hover:bg-[#E8F1FD] hover:text-[#1366D9] flex items-center">
                            <FaUsers className="mr-3" />
                            Guest
                        </li>
                        <li className="px-4 py-2 hover:bg-[#E8F1FD] hover:text-[#1366D9] flex items-center">
                            <FaHotel className="mr-3" />
                            Rooms
                        </li>
                        <li className="px-4 py-2 hover:bg-[#E8F1FD] hover:text-[#1366D9] flex items-center">
                            <FaHandshake className="mr-3" />
                            Deal
                        </li>
                        <li className="px-4 py-2 hover:bg-[#E8F1FD] hover:text-[#1366D9] flex items-center">
                            <FaDollarSign className="mr-3" />
                            Rate
                        </li>
                    </ul>
                </nav>
                <div className="p-4 text-sm text-center border-t border-blue-700">
                    &copy; 2024 Suite-Spot
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;