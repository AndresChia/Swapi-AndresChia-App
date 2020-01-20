import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './styles.css';

const Header = () => (
    <div className="contenedorHeader">
        <Grid fluid className="contenedorTitle">
            <Row>
                <Col className="col" xs={12} md={4} lg={4}>


                </Col>
                <Col className="col" xs={12} md={4} lg={4}>

                    <a href="https://www.google.com" className="imagenLogo"></a>

                </Col>
                <Col className="col" xs={12} md={4} lg={4}>


                </Col>

            </Row>
        </Grid>

        <div>

            <nav>

                <ul>
                    <li>
                        <h4 className="tituloHeader">Personajes</h4>
                    </li>
                    <li>
                        <h4 className="tituloHeader">Filmes</h4>
                    </li>
                    <li>
                        <h4 className="tituloHeader">hola</h4>
                    </li>
                </ul>
            </nav>


        </div>
    </div>
);


export default Header;
