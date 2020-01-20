import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Principal from "./Components/index"
import Loading from "./Components/Loading/Loading"
import SpringModal  from "./Components/Home/modal/SpringModal"


const Nav = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={Principal}></Route>
      <Route path="/personajes" component={Principal}></Route>
      <Route path="/personajes/:id" component={SpringModal}></Route>
      <Route exact path="/filmes" component={Principal}></Route>
      <Route exact path="/Loading" component={Loading}></Route>
      {/* {false && <Redirect to="/Home"/>} */}
    </Fragment>
  </BrowserRouter>
)

export default Nav;
