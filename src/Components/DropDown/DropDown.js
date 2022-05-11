import { Menu } from '@headlessui/react'

import React from 'react';

function DropDown(props) {
    return (
        <Menu as='div' className="  w-28 " >
            <Menu.Button className=" bg-gray-800 py-1 px-3  text-gray-400 w-full  ">Sort:</Menu.Button>
            <Menu.Items className=" bg-gray-700 w-full flex flex-col py-1   w-full left-3  ">

                <Menu.Item className="w-full py-1 text-gray-400   hover:bg-gray-600">
                    {({ active }) => (
                        <button className='py-1 px-2' onClick={props.alphabetical}>Alphabetic</button>
                    )}
                </Menu.Item>

                <Menu.Item className="w-full py-1 text-gray-400   hover:bg-gray-600">
                    {({ active }) => (
                        <button className='py-1 px-2' onClick={props.releaseDate}>Release Date</button>
                    )}
                </Menu.Item>



                <Menu.Item className="w-full py-1 text-gray-400   hover:bg-gray-600">
                    {({ active }) => (
                        <button className='py-1 px-2' onClick={props.popularity}>Popular</button>
                    )}
                </Menu.Item>

                <Menu.Item className="w-full py-1 text-gray-400   hover:bg-gray-600">
                    {({ active }) => (
                        <button className='py-1 px-2' onClick={props.relevance}>Relevance</button>
                    )}
                </Menu.Item>


            </Menu.Items>
        </Menu>
    )
}

export default DropDown;