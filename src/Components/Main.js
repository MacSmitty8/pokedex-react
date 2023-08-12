import React, { useState } from 'react'
import Box from './Box'
import PokemonInfo from './PokemonInfo'
import axios from 'axios'
import { useEffect } from 'react'
const Main = () => {
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        console.log(res)
    }
    useEffect(() => {
        pokeFun()
    }, { url })
    return (
        <>
            <div className="container">
                <div className="left-details">
                    {/* This will keep everything on the left side of the page,
                 meaning the boxes listing the Pokemon will be rendered on the left, as well as the buttons. */}
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <div className="button-group">
                        <button>Previous</button>
                        <button>Next</button>
                        {/* Buttons that will be used scroll through different kinds of Pokemon, as the API contains alot of them. */}
                    </div>
                </div>

                <div className="right-details">
                    <PokemonInfo />
                    {/* This will align the Pokemon information on the right side of the webpage, 
                    so the name, the picture, it's moves and stats will all be visible here. */}
                </div>
            </div>
        </>
    )
}

export default Main
