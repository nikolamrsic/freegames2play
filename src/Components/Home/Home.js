import React from 'react';
import Navbar from '../Nav-bar/Navbar';
import Hero from '../Hero/Hero';
import GameCard from '../GameCard/GameCard';

import { Fragment } from 'react';
import ToolBar from '../ToolBarContainer/ToolBar';
import CardContainer from '../CardContainer/CardContainer';
import DropDown from '../DropDown/DropDown';
import DropDown_Platform_Filter from '../DropDown_Platform_Filter/DropDown_Platform_Filter';


import { useState, useEffect, useContext, memo } from 'react';
import { Link } from 'react-router-dom'
import { createContext } from 'react';

export const gamesLength_Number = createContext()

function Home(props) {



    //variables
    let [gameList, setGameList] = useState()
    let [ganeList_Length, setGameList_Length] = useState()


    let [page, setPage] = useState(20)


    let [filtered, setFiltered] = useState()
    let [LinkOption, setLinkOption] = useState('')




    let [valueForSearch, setValueForSearchc] = useState("")
    let [enteredSreachValue, setSerchValue] = useState('')



    const get_Entered_Search_Value = (e) => {
        setSerchValue(e.target.value)

    }


    useEffect(() => {
        const Timer = setTimeout(() => {
            setValueForSearchc(enteredSreachValue)
        }, 1000)

        return () => { clearTimeout(Timer); }
    }, [enteredSreachValue])

    let [url, setUrl] = useState('https://free-to-play-games-database.p.rapidapi.com/api/games')

    //setPage


    //dipatch after component unmount
    const abort = new AbortController()

    function getData(LinkOptions) {

        let Link = `https://free-to-play-games-database.p.rapidapi.com/api/games${LinkOptions == null ? '' : LinkOptions}`

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': '39c1e5adfamshabe6434e5a33256p1f220djsnd82286363892'
            }
        };

        fetch(Link, options, { signal: abort.signal })
            .then(response => response.json())
            .then(response => {
                setGameList(response)
                setGameList_Length(response.length)
                console.log(typeof gameList)
            })
            .catch(err => console.error(err));
    }



    //fetching data
    useEffect(() => {

        getData(LinkOption)

        return () => { abort.abort() }

    }, [LinkOption])

    //filter by Alphabetic
    const filter_ALphabetic = () => { setLinkOption('?sort-by=alphabetical') }
    const filter_ReliseDate = () => { setLinkOption('?sort-by=release-date') }
    const filter_Popularity = () => { setLinkOption('?sort-by=popularity') }
    const filter_Relevance = () => { setLinkOption('?sort-by=relevance') }

    //platrofm filter
    const filter_Window = () => { setLinkOption('?platform=pc') }
    const filter_Browser = () => { setLinkOption('?platform=browser') }


    return (
        <>
            <Navbar/>
            <Hero />
            <ToolBar>
                <DropDown alphabetical={filter_ALphabetic} releaseDate={filter_ReliseDate} popularity={filter_Popularity} relevance={filter_Relevance} />
                <DropDown_Platform_Filter windowFilter={filter_Window} borwserFilter={filter_Browser} />

                <input onInput={(e) => {
                    get_Entered_Search_Value(e)
                }} className=" bg-gray-900 focus:outline-none  text-blue-400 py-1 px-4 border-gray-700 border h-9 lowercase   shadow-purple-800 placeholder:text-blue-400 placeholder:text-center " placeholder="Search game" />

            </ToolBar>
            <gamesLength_Number.Provider value={[ganeList_Length, page, valueForSearch]}>
                <CardContainer handlerPage={() => { setPage(page + 20) }}>
                    {(gameList != undefined && valueForSearch === '') && gameList.map((game, index) => {

                        if (index < page) {
                            return <Link key={game.id} to={'/gameinfo/' + game.id}><GameCard key={game.id} imgLocation={game.thumbnail} label={game.title} description={game.short_description} /></Link>
                        }

                    })}

                    {valueForSearch !== '' && gameList.filter((game) => {


                        return game.title.toLowerCase().includes(valueForSearch)
                    }).map((game) => {

                        return <Link key={game.id} to={'/gameinfo/' + game.id}><GameCard key={game.id} imgLocation={game.thumbnail} label={game.title} description={game.short_description} /></Link>
                    })}





                </CardContainer>

            </gamesLength_Number.Provider>
        </>
    );
}

export default React.memo(Home);
