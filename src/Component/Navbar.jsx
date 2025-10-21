import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import navImg from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user ,signInOut} = use(AuthContext);

    const handleLogout =() =>{
        console.log('user is trying to logout');
        signInOut()
        .then(()=>{
            alert('sign out successfully')
        })
        .catch(error =>{
            alert(error.message)
            console.log((error.message));
            
        })
    }
    
    
    
    
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
                {user? <button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button> : <Link to={'/auth/login'} className='btn btn-primary px-10'>Login</Link>}
                
            </div>
        </div>
    );
};

export default Navbar;