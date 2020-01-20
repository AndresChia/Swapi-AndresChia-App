
import React from 'react';
import './styles.css';
// import PropTypes from "prop-types";


const Loading = () => {


    return (
        <div className="contenedorLoading">
            <p className="loading">Cargando</p>
            <div className="scene">
                <div className="wrap">
                    <div className="wall wall-right"></div>
                    <div className="wall wall-left"></div>
                    <div className="wall wall-top"></div>
                    <div className="wall wall-bottom"></div>
                    <div className="wall wall-back"></div>
                </div>
                <div className="wrap">
                    <div className="wall wall-right"></div>
                    <div className="wall wall-left"></div>
                    <div className="wall wall-top"></div>
                    <div className="wall wall-bottom"></div>
                    <div className="wall wall-back"></div>
                </div>
            </div>
        </div>
    )



}




export default Loading;






