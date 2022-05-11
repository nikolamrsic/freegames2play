import React from 'react';
import GameCard from '../GameCard/GameCard';
import { PlusIcon } from '@heroicons/react/solid'
import { useContext } from 'react'
import Home from '../Home/Home';
import { gamesLength_Number } from '../Home/Home'
import { motion } from 'framer-motion'
function CardContainer(props) {

    let gamesLength = useContext(gamesLength_Number);
    let page = gamesLength[1]
    let gaamesLengthNum = gamesLength[0]
    let valueForSearch = gamesLength[1]

    return (
        <motion.div Layout className="w-full bg-gray-900 py-4 flex flex-col items-center relative z-10 transition-all ">

            <motion.section Layout className=" grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-2  lg:grid-cols-3">
                {props.children}
            </motion.section>


            {(page > gaamesLengthNum) ? <h1 className='text-gray-500 mt-5 text-xl'> No more</h1> : <button onClick={props.handlerPage} className=' py-4 px-6 mt-7 bg-gray-800 rounded-lg  transition-all hover:shadow-lg border-2 border-transparent hover:border-gray-500  '><PlusIcon className='h-8 w-8 fill-gray-600 hover:fil-white transition-all' /></button>}

        </motion.div >

    );
}

export default CardContainer;