import React from 'react'

const PokemonInfo = () => {
  return (
    <>
        <div>
      <h1>Charmander</h1>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="" />
      <div className="abilities">
        <div className="group">
            <h2>Blaze</h2>
        </div>
        <div className="group">
            <h2>Solar-Power</h2>
        </div>
      </div>
      </div>
      <div className="base-stat">
        <h3>HP: 30</h3>
        <h3>Attack: 52</h3>
        <h3>Defense: 43</h3>
        <h3>Special-Attack: 50</h3>
        <h3>Speed: 65</h3>
      </div>
    </>
  )
}

export default PokemonInfo