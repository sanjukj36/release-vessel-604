import React from 'react';
import PropTypes from 'prop-types';
import errorImg from '@/assets/images/error.webp';

const Error = () => {
   
    return (
        <div className="flex flex-col items-center justify-center h-screen px-10 text-destructive text-center">
            <img className='imgEffect' src={errorImg} alt="Error" /> 
            <h1 className='text-9xl'>ERROR</h1>
            <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg mb-8">We couldn't find the page you were looking for.</p>
           
        </div>
    );
};

Error.propTypes = {
    setIsSpinner: PropTypes.func.isRequired,
};

export default Error;
