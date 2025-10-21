import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>

            {/* showing navbar */}
            <header className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>
            

            {/* showing login section */}
            <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default AuthLayout;