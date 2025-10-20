import React from 'react';
import headerLogo from '.././assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-1.5 mt-10'>
            <img
            className='flex flex-col justify-center mx-auto items-center gap-3'
             src={headerLogo} alt="" />
             <p className='text-md text-accent '>Journalism Without Fear or Favour</p>
             <p className='text-accent text-semibold'>{format(new Date(),'EEEE,MMMM MM ,  yyyy')}</p>
        </div>
    );
};

export default Header;