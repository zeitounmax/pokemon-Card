import React from "react";

function NavBar(props) {
  return (
    <div>
      {props.showPrev && (
        <button onClick={props.handlePrev}>Précédent</button>
      )}
      {props.showNext && (
        <button onClick={props.handleNext}>Suivant</button>
      )}
    </div>
  );
}

export default NavBar;
