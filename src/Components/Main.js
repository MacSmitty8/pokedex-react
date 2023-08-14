import React, { useState } from 'react'
import Box from './Box'
import PokemonInfo from './PokemonInfo'
import axios from 'axios'
import { useEffect } from 'react'
const Main = () => {
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();
 
    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        console.log(res.data.results)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
        console.log(pokeData)
    }
    const getPokemon = async(res)=>{
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state=[...state, result.data]
                state.sort((a,b) => a.id>b.id?1:-1)
                return state;
            })
        })
    }
    useEffect(() => {
        pokeFun();
    }, [url])
    return (
        <>
            <div className="container">
                <div className="left-details">
                    {/* This will keep everything on the left side of the page,
                 meaning the boxes listing the Pokemon will be rendered on the left, as well as the buttons. */}
                    <Box pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)}/>
                    <div className="button-group">
                        <button onClick={() =>{setUrl(prevUrl)
                        }}>Previous</button>
                        <button onClick={() => {setUrl(nextUrl)}}>Next</button>
                        {/* Buttons that will be used scroll through different kinds of Pokemon, as the API contains alot of them. */}
                    </div>
                </div>

                <div className="right-details">
                    <PokemonInfo data={pokeDex}/>
                    {/* This will align the Pokemon information on the right side of the webpage, 
                    so the name, the picture, it's moves and stats will all be visible here. */}
                </div>
            </div>
        </>
    )
}

export default Main
