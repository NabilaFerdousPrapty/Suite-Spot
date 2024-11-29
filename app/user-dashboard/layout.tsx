import Sidebar from '@/components/user-dashboard/sidebar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className='flex min-h-screen'>
            {/* sidebar */}
            <div>
                <Sidebar />
            </div>

            {/* main content */}
            <main className="flex-1 p-6">
                <header className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                </header>
                <div className="bg-white p-6 shadow-md rounded-lg">{children}</div>
            </main>
        </div>
    );
};

export default Layout;