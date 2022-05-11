import React from 'react';
import { Link } from 'react-router-dom'
function ErrorPage(props) {
    return (
        <div className=' flex flex-col items-center  text-center h-screen bg-gradient-to-tr from-black  '>
            <div className='py-3 px-4 text-gray-500 mt-14 font-bold'>
                < h1 className='text-5xl' > Woops! < br /> <span className='text-red-800'>404</span> Page not Found!</h1 >
            </div >
            <Link to='/home'><button className='   bg-gray-600 py-2 px-6  rounded mt-5 text-white'>Go to Home</button></Link>
        </div >
    );
}

export default ErrorPage; 