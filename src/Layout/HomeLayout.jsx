import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews.jsx/LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/LayoutHome/LeftAside';
import RightAside from '../Component/LayoutHome/RightAside';

const HomeLayout = () => {
    return (
        <div>
            {/* this is header part */}
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto mt-5'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto mt-5'>
                    <Navbar></Navbar>
                </nav>
            </header>


            {/* this is main part */}
            <main className='w-11/12 mx-auto grid grid-cols-12 mt-12 gap-5'>
                <aside className='col-span-2'>
                    <LeftAside></LeftAside>
                </aside>

                <section className="main_nav col-span-7">
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>






        </div>
    );
};

export default HomeLayout;