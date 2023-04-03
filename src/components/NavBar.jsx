import React from "react";

function NavBar(props) {
  const handleNext = () => {
    props.handleNext();
    if (props.pokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  const handlePrev = () => {
    props.handlePrev();
    if (props.pokemon.name === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  return (
    <div>
      {props.pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => props.handleIndexChange(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
