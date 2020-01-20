
import React, { Component } from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../../Services/swapi.services";
import  Tarjetas  from "./Tarjetas/app";
import  Botones  from './Paginador/app';


// import './styles.css';
// import PropTypes from "prop-types";


class Home extends Component {


 constructor() {
    super();
    this.state = {
      pagina: 0
    };
  }



  handleSelection = event => {
    var activesBoton=document.getElementsByClassName("activeBoton");
    if(activesBoton.length>0){
      var arr = Array.prototype.slice.call( activesBoton )
      arr.forEach(element => {
        element.classList.remove("activeBoton");
      });
    }
    event.currentTarget.classList.add("activeBoton");
    const pagina= parseInt(event.target.textContent)
    this.setState({
        pagina
    })
  }


  componentDidUpdate(prevProps, prevState) {
    
  }
  

    render() {
        const { pagina } = this.state;
        return (
            <>
            
                <ApolloProvider client={client}>
                  <div className="tarjetasContenedor">
                    <Tarjetas  pagina={pagina}/>
                  </div>

                  <div className="botonesContenedor">
                    <Botones onSelectedLocation={this.handleSelection} />
                  </div>
                </ApolloProvider>



            </>
        )
    }
}


export default Home;
