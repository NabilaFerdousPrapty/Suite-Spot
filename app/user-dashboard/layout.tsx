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
                <div className="">{children}</div>
            </main>
        </div>
    );
};

export default Layout;