import React from 'react';
import { Link } from 'react-router-dom';


function NavigationBar(props) {
    return (
        <div className="text-gray-100   px-5  ">
            <nav className="flex gap-8">
                <Link to='/home'>
                
                <div className=" "><div className="bg-gradient-to-t    from-cyan-500 to-white  bg-clip-text"><span className=" text-transparent  text-lg  font-hero">Home</span></div></div>
                </Link>
                <Link to='/games'>
              
                <div className="  "><div className="bg-gradient-to-t    from-cyan-500 to-white  bg-clip-text"><span className=" text-transparent text-lg  font-hero ">Games</span></div></div>
                </Link>
                <div className="  "><div className="bg-gradient-to-t    from-cyan-500 to-white  bg-clip-text"><span className=" text-transparent text-lg  font-hero">Downloads</span></div></div>

            </nav>
        </div>
    );
}

export default NavigationBar;