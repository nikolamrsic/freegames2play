import React from 'react';

function Hero(props) {
    return (
        <div className=" h-36  bg-hero-pattern object-left-top  bg-fixed bg-cover bg-center">
            <section className=" flex justify-center items-center  w-full h-full  flex justify-center py-4  backdrop-blur-sm  bg-gradient-to-t  from-cyan-500 to-white  bg-clip-text ">
                <h1 className="outline-double text-transparent text-clip font-bold text-3xl md:text-5xl font-bold font-hero ">Free games to play</h1>
            </section>
        </div>
    );
}

export default Hero;