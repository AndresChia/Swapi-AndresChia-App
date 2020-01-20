import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const Peliculas = ({ films }) => {
    const datosPeliculas = films.map(({id,title},index) => {
        return (
            <li key={id}>
                <Link to={`/personajes/${id}`}>
                    <h5>{title}</h5>
                </Link>
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
    onSelectedLocation: PropTypes.array,
}

export default Peliculas;