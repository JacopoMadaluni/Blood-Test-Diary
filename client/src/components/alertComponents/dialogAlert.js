import React, { Component } from 'react';
import styled from "styled-components";

const Alert = styled.div`

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;


  color: #646464;
  font-size: 130%;

  .alertMessageContainer {
    border: solid 0 blue;

    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    overflow: hidden;

  }

  .alertMessage {
    margin: 10px 20px;
    text-align: center;

    overflow: scroll;
  }
`;

export default class DialogAlert extends Component {

    startTimer = () => {
      setTimeout( () => {
            this.props.closeAlert();
      }, 5000);
    }

    render(){
      this.startTimer();
      return (
          <>
            <Alert>
              <div className="alertMessageContainer">
                <p className="alertMessage">{this.props.message}</p>
              </div>
            </Alert>
          </>
      )
    }
}
