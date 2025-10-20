import React from 'react';
import { NavLink } from 'react-router';
import navImg from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav flex gap-3 items-center text-accent text-md">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="login-btn flex gap-3 items-center">
                <img src={navImg} alt="" />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;