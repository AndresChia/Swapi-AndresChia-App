import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Peliculas = ({ films }) => {
    const datosPeliculas = films.map((film) => {
        return (
            <li onClick="">
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

Peliculas.propTypes = {
    onSelectedLocation: PropTypes.array.isRequired,
}

export default Peliculas;