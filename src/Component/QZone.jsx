import React from 'react';
import swiming from '../assets/swimming.png'
import playground from '../assets/playground.png'
import classImg from '../assets/class.png'
import bgImg from '../assets/bg.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-5'>QZone</h2>
            <div className='space-y-5'>
                <img src={swiming} alt="" />
                <img src={classImg} alt="" />
                <img src={playground} alt="" />
                <img src={bgImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;