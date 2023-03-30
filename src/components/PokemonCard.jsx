import React from "react";
import PropTypes from 'prop-types';


function PokemonCard(props) {
  const pokemon = props.pokemon;
  let imageElement = null;
  if (pokemon.imgSrc) {
    imageElement = <img src={pokemon.imgSrc} alt={pokemon.name} />;
  } else {
    imageElement = <p>???</p>;
  }
  return (
    <figure>
      {imageElement}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

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
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string
  }).isRequired
};

export default PokemonCard;


