
import React, { Fragment } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from "prop-types";
import Peliculas from "./Peliculas/Peliculas";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { STAR_WARS_PERSONS } from "../../../Services/swapi.services";
import './styles.css';

const Tarjetas = ({ pagina }) => {
  const { loading, error, data } = useQuery(STAR_WARS_PERSONS(pagina));
  if (loading) return (
    <>
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <div className="contenedorTarjetas">
              <CircularProgress size={60} thickness={7} color="inherit" /> />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="contenedorTarjetas">
              <CircularProgress size={60} thickness={7} color="inherit" /> />
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div className="contenedorTarjetas">
              <CircularProgress size={60} thickness={7} color="inherit" /> />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="contenedorTarjetas">
              <CircularProgress size={60} thickness={7} color="inherit" /> />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="contenedorTarjetas">
              <CircularProgress size={60} thickness={7} color="inherit" /> />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="contenedorTarjetas">
              <CircularProgress size={60} thickness={7} color="inherit" /> />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="contenedorTarjetas">
              <CircularProgress size={60} thickness={7} color="inherit" /> />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="contenedorTarjetas">
              <CircularProgress size={60} thickness={7} color="inherit" /> />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="contenedorTarjetas">
              <CircularProgress size={60} thickness={7} color="inherit" /> />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="contenedorTarjetas">
              <CircularProgress size={60} thickness={7} color="inherit" /> />
            </div>
          </Col>
        </Row>
      </Grid>
    </>
  );
  if (error) return <p>There's an error: {error.message}</p>;
  const personas = data.allPersons.map(({ name: namePerson, id: idPerson, gender: genderPerson, films }) => {
    // { id: idFilm, director, title, planets: { id: idPlanet, name: namePlanet } }
    return (
      <>
        <Col key={idPerson} xs={12} md={6}>
          <div className="contenedorTarjetas">
            <div className="contenedorTitulo">
              <h1>{namePerson}</h1>
            </div>
            <div className="contenedorImage">
              <Peliculas films={films}></Peliculas>
            </div>
          </div>
        </Col>
      </>
    )
  }
  );

  return (
    <Fragment>
      <Grid>
        <Row>
          {personas}
        </Row>
      </Grid>
    </Fragment>
  );
}

Tarjetas.propTypes = {
  pagina: PropTypes.number.isRequired,
}

export default Tarjetas;