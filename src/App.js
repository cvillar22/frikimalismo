import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Container/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <NavBar />
        <Routes>
          <Route exact path= '/' element={<ItemListContainer/>} />
          <Route exact path= '/category/:id' element={<ItemListContainer/>} />
          <Route exact path= '/product/:id' element={<ItemDetailContainer/>} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
