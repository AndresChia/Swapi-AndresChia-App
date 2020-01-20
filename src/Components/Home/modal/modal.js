import React, { Component } from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "../../Services/swapi.services";
import Tarjetas from "./Tarjetas/Tarjetas";
import Botones from "./Paginador/Botones"

class Modal extends Component {
    constructor() {
        super();
        this.state = {
            pagina: 0
        };
    }


    render() {


        return (null)
    }


}

export default Modal;
