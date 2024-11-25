
import './App.css';
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import { useState } from 'react';


function App() {
  const [btnLabel, setBtnLabel] = useState("Clique aqui")

  const btnClick = () => {
    setBtnLabel("Clique aqui")
    alert("A label desse botão é Baixar CV")
  }
  return (
    <>
    <Card text="Faça o componente renderizar na tela um parágrafo colorido
    e com todas as letras maiúsculas usando JS; Utilize props para passar o texto e a cor de texto desejada para dentro do componente (a cor pode ser uma palavra, como 'red', ou um hexadecimal" color="blue" />

    <Button onClick={btnClick} label={btnLabel} />
  </>
  );
}

export default App;

