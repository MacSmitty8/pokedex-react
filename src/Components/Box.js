import React from 'react'

const Box = ({ pokemon, loading, infoPokemon }) => {
  console.log(pokemon)
  return (
    <>

      {
        
        loading ? <h1>Loading...</h1> :
        //If nothing is visible on the page while everything is being rendered, it'll show a loading message.
          pokemon.map((item) => {
            return (
              <>
                <div className="box" key={item.id} onClick={() => infoPokemon(item)}>
                  <h2>{item.id}</h2>
                  <img src={item.sprites.front_default} alt="" />
                  <h2>{item.name}</h2>
                </div>
                {/* Displays the Pokemon name, id, and artwork in the boxes on the left side of the page. */}
                {/* This will be where the different selectable pokemon boxes 
      will be put for the user to click on to render. */}

              </>
            )
          })
      }

    </>
  )
}

export default Box
