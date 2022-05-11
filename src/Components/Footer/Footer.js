import React from 'react';
import ld from './linkedin.svg'
import cp from './codepen.svg'
function Footer(props) {
    return (
        <footer className="flex items-center bg-gray-800   md:flex-row flex-col-reverse  justify-center py-5  ">



            <div className="flex flex-col-reverse gap-y-4 grid-col-1 md:w-6/12 w-full">
             
                
                <div className="flex  gap-3 py-1 px-2">

<div className="py-1 px-1  text-white"><a href='www.linkedin.com/in/nikola-mrsic-design' target='_blanc'><img src={ld}/></a></div>
<div className="py-1 px-1  text-white"><a href='https://codepen.io/niDzolski' target='_blanc'><img src={cp}/></a></div>
<div className="flex flex-col gap-3 py-1 px-2">

<div className="py-1 px-1  font-bold text-white"><a href='https://www.freetogame.com/api-doc' target='_blanc'>API</a></div>

</div>
</div>
<div className="bg-gradient-to-t from-cyan-500  self-start to-white bg-clip-text py-2 px-3 text-3xl font-bold text-white"><span className="text-transparent font-hero">FREE GAMES</span></div>

            </div>
            
           
           

        </footer>
    );
}

export default Footer;