import React from 'react';
import './App.css';
// import Loading from './Components/Loading';
import Home from './Components';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="homeComponent">
        <Home ></Home>
      </div>
    </div>
  );
}

export default App;
