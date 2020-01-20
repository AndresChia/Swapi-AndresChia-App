import React from 'react';
import './App.css';
// import Loading from './Components/Loading';
import Home from './Components/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className="headerComponent">
        <Header></Header>
      </div>
      <div className="homeComponent">
        <Home ></Home>
      </div>
    </div>
  );
}

export default App;
