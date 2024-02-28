import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card.jsx";
import Form from "./Components/Form.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card />
      <Form />
    </>
  );
}

export default App;
