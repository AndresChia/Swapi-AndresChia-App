
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/react-hooks";
import { STAR_WARS_FILM } from "../../../Services/swapi.services";
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress';

const PeliculasData = ({ id }) => {
    const { loading, error, data } = useQuery(STAR_WARS_FILM(id));
    if (loading) return (
        <div className="divCargar">
            <CircularProgress size={60} thickness={7} color="inherit" />
        </div>
    );
    if (error) return <p>There's an error: {error.message}</p>;

    const {  producers, director, title, openingCrawl, planets } = data.Film;


    const planetas = planets.map(({ name }) => {
        debugger
        return (<p key={name}>{` - ${name}`}</p>)
    }
    );

    const productores = producers.map((name) => {
        debugger
        return (<p key={name}>{` - ${name}`}</p>)
    }
    );



    return (
        <Fragment>

            <div className="fade"></div>
            <section className="star-wars">
                <div className="crawl">
                    <div className="title">
                        <p>{director}</p>
                        <h1>{title}</h1>
                    </div>
                    <p>{openingCrawl}</p>
                    <h3>{"Planetas"}</h3>
                    {planetas}
                    <h3>{"Productores"}</h3>
                    {productores}
                </div>
            </section>
        </Fragment>
    );
}

PeliculasData.propTypes = {
    id: PropTypes.any,
}

export default PeliculasData;