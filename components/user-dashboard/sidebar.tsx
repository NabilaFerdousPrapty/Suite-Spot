"use client";

import React from 'react';
import { FaTachometerAlt, FaConciergeBell, FaUsers, FaHotel, FaHandshake, FaDollarSign } from "react-icons/fa";
import { usePathname, useRouter } from 'next/navigation';

const MENU_ITEMS = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, path: '/user-dashboard' },
    { name: 'Frontdesk', icon: <FaConciergeBell />, path: '/user-dashboard/frontdesk' },
    { name: 'Guest', icon: <FaUsers />, path: '/user-dashboard/guest' },
    { name: 'Rooms', icon: <FaHotel />, path: '/user-dashboard/rooms' },
    { name: 'Deal', icon: <FaHandshake />, path: '/user-dashboard/deal' },
    { name: 'Rate', icon: <FaDollarSign />, path: '/user-dashboard/rate' },
];

const Sidebar = () => {
    const pathname = usePathname(); // To get the current route
    const router = useRouter();    // To navigate programmatically

    return (
        <aside className="w-64 text-gray-600 flex flex-col">
            <div className="py-4 px-6 text-2xl font-bold border-b border-blue-700">
                Suite-Spot
            </div>
            <nav className="flex-1">
                <ul className="space-y-2 mt-4">
                    {MENU_ITEMS.map((item) => (
                        <li
                            key={item.name}
                            aria-current={pathname.startsWith(item.path) ? 'page' : undefined}
                            className={`px-4 py-2 flex items-center cursor-pointer ${pathname.startsWith(item.path)
                                ? 'bg-[#E8F1FD] text-[#1366D9]'
                                : 'hover:bg-[#E8F1FD] hover:text-[#1366D9]'
                                }`}
                            onClick={() => router.push(item.path)}
                        >
                            <span className="mr-3">{item.icon}</span>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="p-4 text-sm text-center border-t border-blue-700">
                &copy; 2024 Suite-Spot
            </div>
        </aside>
    );
};

export default Sidebar;
