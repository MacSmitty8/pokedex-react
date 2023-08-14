import React from 'react'

const Box = ({ pokemon, loading }) => {
  console.log(pokemon)
  return (
    <>

      {
        loading ? <h1>Loading...</h1> :
          pokemon.map((item) => {
            return (
              <>
                <div className="box">
                  <h2>{item.id}</h2>
                  <img src={item.sprites.front_default} alt="" />
                  <h2>Charmander</h2>
                </div>
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
