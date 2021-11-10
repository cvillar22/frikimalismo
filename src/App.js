import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Container/ItemListContainer";
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greetings="BIENVENIDO! ESTAMOS TRABAJANDO PARA UD" />
    </div>
  );
}

export default App;
