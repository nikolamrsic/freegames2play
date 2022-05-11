import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
function Navbar(props) {
    return (
        <div className=" bg-slate-800 flex   justify-around">

            <div className="flex justify-around   w-8/12 items-center md:flex-row flex-col gap-10  bg-slate-800 py-5  border-gray-700 ">
                <Link exact to="/games">
                    <div className=" bg-gradient-to-t  from-cyan-500 to-white  bg-clip-text"><h1 class="  font-bold text-2xl text-transparent font-hero underline underline-offset-4">FREE GAMES</h1></div></Link>
                <div className="flex items-center">
                    <NavigationBar />

                </div>
            </div>

        </div>
    );
}

export default Navbar