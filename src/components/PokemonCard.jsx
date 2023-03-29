import React from "react";
const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];


function PokemonCard () {
    const pokemon = pokemonList[0];
    const {name, imgSrc} = pokemon;
    return (
        <>
      <figure className="card">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="bulbasaur"
        className="card-img"
      />
         <figcaption>bulbasaur</figcaption>
</figure>
    
        </>

    )
}

export default PokemonCard;