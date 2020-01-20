import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import './styles.css';
import PeliculasData from './PeliculasData';
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from '../../../Services/swapi.services';



class SpringModal extends Component {



  constructor(props) {
    super();
    this.state = {
      id: props.match.params.id
    };
  }



  handleOpen = () => {
    debugger
  };

  handleClose = () => {
    this.props.history.push('/personajes');
  };












  render() {
    return (
      <div>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className={"modal"}
          open={true}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >



          <div className="jss260">

            <ApolloProvider client={client}>
              <PeliculasData id={this.props.match.params.id}></PeliculasData>
            </ApolloProvider>

          </div>



        </Modal>
      </div>
    );

  }

}

export default SpringModal;
