import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Fragment } from 'react'
import Loading from '../Loading/Loading';
import { motion } from 'framer-motion'
import Navbar from '../Nav-bar/Navbar';
function GamePage(props) {

    let gameID = useParams()
    let [gameInfo, setGameInfo] = useState()
    let [mainPhoto, setMainPhoto] = useState()
    let [open, setOpen] = useState(false)

    useEffect(() => {

        console.log(gameID)

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': '39c1e5adfamshabe6434e5a33256p1f220djsnd82286363892'
            }
        };

        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID.id}`, options)
            .then(response => response.json())
            .then(response => {
                setGameInfo(response)
                setMainPhoto(response.screenshots[0].image)
            })

            .catch(err => console.error(err));

    }, [])

    console.log('GAMING')
    return (

        <>
        <Navbar/>
            {gameInfo == undefined ? <Loading /> : <motion.div animate={{ opacity: 1, }} initial={{ opacity: 0, }} className='w-100 py-10  bg-contain  bg-cover bg-no-repeat bg-top' style={{}}> < div className="game-info  bg-gray-900 py-2 px-3 max-w-7xl m-auto   drop-shadow-lg bg-gradient-to-t  from-gray-900 to-gray-800 rounded-md " >


                <div className="flex md:flex-row flex-col py-3 gap-8 items-start   px-3 ">

                    <div className="py-2 px-2 self-center">
                        <div className="md:w-96 md:h-auto overflow-hidden rounded-lg drop-shadow-md "><img className="w-full h-full" src={gameInfo.thumbnail} /></div>
                        <div className="py-3"> <h1 className="font-bold text-xl text-gray-100 md:text-3xl">{gameInfo.title}</h1></div>
                        <div className="py-2 text-gray-600 mb-3 flex gap-3"><span className="bg-green-500 py-2 px-4 text-white rounded">Free</span><span className="bg-gray-500 py-2 px-4 text-white rounded">Shuter</span></div>
                        <div className=" bg-cyan-800 rounded-sm py-2 px-3 md:w-28 flex justify-center items-center text-white"><a target="_blanc">Game Link</a></div>
                    </div>

                    <div className="px-2 w-full md:w-6/12  flex-1 ">
                        <div className="text-left"><h1 className="text-xl text-gray-100">Minimum system requirements :</h1></div>
                        <hr className=' bg-gradient-to-r from-cyan-500 to-gray-800  mt-2 border-none  outline-none' style={{ height: '1px' }} />
                        <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-3.5  ">
                            <div className='flex flex-col gap-5'>
                                <div className="flex gap-3  flex-row  flex-0 h-fit  rounded-md  flex-wrap "><h2 className=" text-gray-600  ">Os :</h2><span className='text-gray-200 '>{gameInfo.minimum_system_requirements.os}</span></div>
                                <div className="flex gap-3  flex-col text-gray-200 h-fit flex-wrap  rounded-md"><h2 className="text-gray-600">Procesror :</h2><span className='text-gray-200 '>{gameInfo.minimum_system_requirements.processor}</span></div>
                                <div className="flex gap-3  flex-row text-gray-200 h-fit flex-wrap rounded-md"><h2 className="text-gray-600">Memory :</h2><span className='text-gray-200 '>{gameInfo.minimum_system_requirements.memory}</span></div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className="flex gap-3  flex-col text-gray-200 h-fit flex-wrap rounded-md"><h2 className="text-gray-600 ">Graphic :</h2><span className='text-gray-200 '>{gameInfo.minimum_system_requirements.graphics}</span></div>
                                <div className="flex gap-3  flex-row text-gray-200 h-fit flex-wrap rounded-md"><h2 className="text-gray-600">Storage :</h2><span className='text-gray-200 '>{gameInfo.minimum_system_requirements.storage}</span></div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className=' bg-gradient-to-r from-cyan-500 to-gray-800  mt-2 border-none  outline-none' style={{ height: '1px' }} />
                <div className="py-2 px-2">

                    <div className=" flex flex-col items-start py-2">
                        <h1 className="text-2xl mb-5 text-gray-300 font-bold ">About Game:</h1>
                        <motion.div Layout className="text-left whitespace-pre-line overflow-hidden transition-all  break-words " style={{ height: open ? 'fit-content' : '4.5rem' }}>
                            <p1 className="whitespace-pre-line text-gray-500 tracking-wider">{gameInfo.description}</p1>
                            <br />

                        </motion.div>
                        <button className='py-1 px-2 text-gray-200' onClick={() => { setOpen(!open) }}>{!open ? "+ Read More" : "- Read Less"}</button>
                        <div>
                        </div>

                    </div>
                </div>
                <div className="flex md:flex-row flex-col py-3 gap-8 items-start    ">
                    <div className="w-full ">
                        <div className="md:w-6/12  w-full"><img className='rounded-md' src={mainPhoto} /></div>
                        <div className=" py-4  w-6/12 grid grid-cols-2 gap-x-4 gap-y-4 lg:flex ">
                            {gameInfo.screenshots.map((photo) => {
                                return <div className=" w-24 h-24 "><img onClick={(e) => { setMainPhoto(e.target.getAttribute('src')) }} className="h-full w-full rounded-md object-cover" src={photo.image
                                } /></div>
                            })}
                        </div>
                    </div>



                </div>
            </div>

            </motion.div>}
        </>

    );
}

export default GamePage;