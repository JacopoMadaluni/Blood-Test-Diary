import React from "react";
import styled from "styled-components";
import StatusCircle from "./StatusCircle";
import AppointmentInfo from "./AppointmentInfo";
import IconSet from "./IconSet";
import VerticalLine from "./VerticalLine";

const Container = styled.div`
  display: block;
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  margin: 5%;
  padding: 0%;
  height: 12%;
  border: solid 1px rgb(100, 100, 100, 0.2);
  display: flex;
  align-items: center;
`;

export default props => {
  return (
    <Container>
      <VerticalLine />
      <StatusCircle type={props.type} />
      <AppointmentInfo name={props.name} />
      <IconSet />
    </Container>
  );
};
