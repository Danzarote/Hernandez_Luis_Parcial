import React, { useState } from "react";
import Card from "./Card";
import "../Styles/Form.css";
const Form = () => {
  const [info, setInfo] = useState({
    nombre: "",
    libro: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (info.nombre.trimStart().length >= 3 && info.libro.length >= 6) {
      console.log("Aqui estamos");
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
      setMostrar(false);
    }
  };

  return (
    <div className="contenedorForm">
      <h1>Escribe el nombre de tu libro favorito</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          onChange={(evento) =>
            setInfo({ ...info, nombre: evento.target.value })
          }
        ></input>
        <label>Libro Favorito</label>
        <input
          type="text"
          onChange={(evento) =>
            setInfo({ ...info, libro: evento.target.value })
          }
        ></input>
        <button>Enviar</button>
      </form>
      {mostrar ? (
        <>
          <Card info={info} />
        </>
      ) : (
        <p>Coloque sus datos para enviar su pedido.</p>
      )}
      {error ? (
        <p style={{ color: "red" }}>
          Debe colocar la información correctamente
        </p>
      ) : null}
    </div>
  );
};

export default Form;
