import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from '../Header/Header.js';
import Veiculos from '../Veiculos/Veiculos';
import Vw from '../Vw/Vw';
import Brasilia from '../Brasilia/Brasilia'
import Mecanica from '../Mecanica/Mecanica';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path ="/" render = {(props) => <Veiculos/>}></Route>
          <Route exact path ="/vw" render = {(props) => <Vw/>}></Route>
          <Route exact path ="/brasilia" render = {(props) => <Brasilia/>}></Route>
          <Route exact path ="/mecanica" render = {(props) => <Mecanica/>}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
