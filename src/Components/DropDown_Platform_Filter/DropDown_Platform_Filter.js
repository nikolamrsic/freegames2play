import { Menu } from '@headlessui/react'

import React from 'react';

function DropDown_Platform_Filter(props) {
    return (
        <Menu as='div' className="  w-28 " >
            <Menu.Button className=" bg-gray-800 py-1 px-3  text-gray-400 w-full  "> Platform:</Menu.Button>
            <Menu.Items className=" bg-gray-700 w-full flex flex-col py-1   w-full left-3  ">

                <Menu.Item className="w-full py-1 text-gray-400   hover:bg-gray-600">
                    {({ active }) => (
                        <button className='py-1 px-2' onClick={props.windowFilter}>Window</button>
                    )}
                </Menu.Item>

                <Menu.Item className="w-full py-1 text-gray-400   hover:bg-gray-600">
                    {({ active }) => (
                        <button className='py-1 px-2' onClick={props.borwserFilter}>Browser</button>
                    )}
                </Menu.Item>


            </Menu.Items>
        </Menu>
    )
}

export default DropDown_Platform_Filter;