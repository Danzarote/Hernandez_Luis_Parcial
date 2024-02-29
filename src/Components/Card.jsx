import React from "react";
import "../Styles/Card.css";

const Card = ({ info }) => {
  const { nombre, libro } = info;

  return (
    <div className="contenedor">
      <h1>Hola, {nombre}</h1>
      <h2>Tu libro favorito es:</h2>
      <div className="favorito">
        <h3>{libro}</h3>
      </div>
    </div>
  );
};

export default Card;
