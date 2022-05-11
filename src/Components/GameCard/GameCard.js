import React from 'react';

import { motion } from 'framer-motion'

function GameCard(props) {
    return (
        <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} Layout className=" bg-slate-800 w-72 rounded-md drop-shadow-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-2">
            <div className="w-full h-32 overflow-hidden "><img className=" object-cover" src={props.imgLocation} /></div>

            <div className="py-3 px-2">

                <div className="flex text-left gap-4 justify-between py-1  truncate  w-full   overflow-hidden  text-ellipsis"><h1 className="text-xl text-white font-normal truncate  w-52  overflow-hidden  text-ellipsis">{props.label}</h1><span className=" bg-green-500 flex items-center justify-center px-3 py-2  h-6  text-white">Free</span></div>

                <div className="py-1  mt-0 flex flex-col items-start">
                    <p1 className="text-gray-500  w-52  text-left  truncate   overflow-hidden  text-ellipsis ">{props.description}</p1>
                    <br />
                    <button className="mt-2 text-gray-500 underline hover:bg-gray-600 py-1 px-2 hover:text-gray-100 rounded-sm">Find more</button>
                </div>
            </div>
        </motion.article>
    );
}

export default GameCard;