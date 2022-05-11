import React from 'react';

function ToolBar(props) {
    return (
        <div className=" bg-gray-900 flex  gap-4 px-4 py-2 md:justify-center relative z-50  border-b-2 border-gray-800" > {props.children}</div >
    );
}

export default ToolBar;