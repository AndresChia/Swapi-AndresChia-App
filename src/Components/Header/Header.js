import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="contenedorHeader">
        <Grid fluid className="contenedorTitle">
            <Row>
                <Col className="col" xs={12} md={4} lg={4}>
                </Col>
                <Col className="col" xs={12} md={4} lg={4}>
                    <span className="imagenLogo"></span>
                </Col>
                <Col className="col" xs={12} md={4} lg={4}>
                </Col>
            </Row>
        </Grid>
        <div className="contenedorMenu">
            <nav>
                <ul>
                    <li className="liMenu">
                        <Link to="/personajes">
                            <h4 className="tituloHeader">Personajes</h4>
                        </Link>
                    </li>
                    <li  className="liMenu">
                        <Link to="/filmes">
                            <h4 className="tituloHeader">Filmes</h4>
                        </Link>
                    </li>
                    <li  className="liMenu">
                        <h4 className="tituloHeader">hola</h4>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
);

export default Header;
