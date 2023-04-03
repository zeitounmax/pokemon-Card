
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
      {props.showPrev && (
        <button onClick={handlePrev}>Précédent</button>
      )}
      {props.showNext && (
        <button onClick={handleNext}>Suivant</button>
      )}
    </div>
  );
}

export default NavBar;
