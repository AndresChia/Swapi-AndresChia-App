import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Principal from "./Components/index"


const App = () => (
  <BrowserRouter>
    <Fragment>
      <Route path="/" component={Principal}></Route>
      <Route path="/Home" component={Principal}></Route>
    </Fragment>
  </BrowserRouter>
)





export default App;
