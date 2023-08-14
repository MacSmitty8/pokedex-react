import React from 'react'

const PokemonInfo = ({ data }) => {
    console.log(data);
    return (
        <>
            {
                (!data) ? "" : (
                    <>
                        <div>
                            <h1>{data.name}</h1>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                            <div className="abilities">
                                {
                                    data.abilities.map((poke) => {
                                        return (
                                            <>
                                                <div className="group">
                                                    <h2>{poke.ability.name}</h2>
                                                </div>
                                            </>
                                        )
                                    })
                                }

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

        </>
    )
}

export default PokemonInfo
