import React from 'react';
// import Loading from './Components/Loading';
import Home from './Home';
import Header from './Header/Header';



const Principal = () =>  {
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


export default Principal;
