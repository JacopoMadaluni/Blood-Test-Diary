import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Field = styled.div`
  position: relative;
  padding-left: 1%;
  width: 30%;
  min-width: 10%;
  margin: 0 2.5%;
  height: 100%;
  color: inherit;
  
  font-size: 200%;
  overflow: scroll;
  display:flex;
  align-items: center;
`;

const Value = styled.div`
  position: relative;
  width: 63%;
  height: auto;
  color: inherit;
  
  font-size: 125%;
  overflow: scroll;
  display:flex;
  align-items:center;
`;


export default class InfoCell extends React.Component {
    render() {
        return (
            <Container >
                <Field>{this.props.field}</Field>
                <Value>{this.props.value}</Value>
            </Container>
        );
    }
}