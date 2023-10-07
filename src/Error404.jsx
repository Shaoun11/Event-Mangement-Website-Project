import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            <div className='items-center flex justify-center'>
            <img src="https://i.ibb.co/ZmGtggZ/404-error-dribbble-800x600.gif" alt="" />
            </div>
            <h1 className='text-center font-semibold text-4xl'>Page Not Found... </h1>
        </div>
    );
};

export default Error404;