import React from 'react'
import Box from './Box'
import PokemonInfo from './PokemonInfo'
const Main = () => {
    return (
        <>
            <div className="container">
                <div className="left-details">
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                    <Box />
                </div>
                <div className="right-details">
                    <PokemonInfo />
                </div>
            </div>
        </>
    )
}

export default Main
