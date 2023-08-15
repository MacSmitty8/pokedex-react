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
                            </div>
                        </div>
                        <div className="base-stat">
                            {
                                data.stats.map((poke) => {
                                    return (
                                        <>
                                            <h3>{poke.stat.name} : {poke.base_stat}</h3>
                                        </>
                                    )
                                })
                            }
                        </div>
                        {/* Takes in the Pokemon's name, stats, abilities and image from the API and renders them on the right side of the page. */}
                    </>
                )
            }

        </>
    )
}

export default PokemonInfo
