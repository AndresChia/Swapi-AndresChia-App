import React, { Fragment } from "react";


const Peliculas = ({ films }) => {

    const datosPeliculas = films.map((film) => {
        return (
            <li>
                <h5>{film.title}</h5>
            </li>
        )
    }
    );


    return (
        <Fragment>
            <ul>
                {datosPeliculas}
            </ul>

        </Fragment>
    );



}

export default Peliculas;