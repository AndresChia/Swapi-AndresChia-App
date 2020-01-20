
import React, { Fragment } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PropTypes from "prop-types";
import { Grid, Row } from 'react-flexbox-grid';
import { useQuery } from "@apollo/react-hooks";
import { STAR_WARS_PERSONS_NUMBER } from "../../../Services/swapi.services";
import './styles.css';

const Botones = ({ onSelectedLocation }) => {

    const { loading, error, data } = useQuery(STAR_WARS_PERSONS_NUMBER);
    if (loading) return (<CircularProgress size={60} thickness={7} color="inherit" />);
    if (error) return <p>There's an error: {error.message}</p>;
    var { count } = data._allPersonsMeta;
    count = Math.floor(count / 10);
    const numbers = [...Array(count).keys()];
    const botones = numbers.map((index) => {
        return (<Button key={index} onClick={onSelectedLocation} >{index + 1}</Button>)
    }
    );
    return (
        <Fragment>
            <Grid>
                <Row>
                    <Grid>
                        <Row className="paginador">
                            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                                {botones}
                            </ButtonGroup>
                        </Row>
                    </Grid>
                </Row>
            </Grid>
        </Fragment>
    );
}

Botones.propTypes = {
    onSelectedLocation: PropTypes.func.isRequired,
}

export default Botones;