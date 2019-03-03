import React from "react";
import styled from "styled-components";
import StatusCircle from "./StatusCircle";
import AppointmentInfo from "./AppointmentInfo";
import IconSet from "./IconSet";
import TimePill from "./TimePill";
import {getServerConnect} from "../../../serverConnection.js";
import {isPastDate} from "../../../lib/calendar-controller.js";
const Container = styled.div`
  display: block;
  position: relative;
  background-color: ${props => (props.tentative ? `#c1c1c1` : `white`)};
  margin-top: 0;
  margin-bottom: 0;
  margin: 2.5%;
  padding: 0%;
  height: 14%;
  border: solid 1px rgb(100, 100, 100, 0);
  border-radius: 5px;
  display: flex;
  align-items: center;
  z-index: 3;
  & .pill {
    opacity: 0;
    transition: opacity 150ms;
  }
  ${props =>
    props.tentative
      ? ``
      : `&:hover {
    border: solid 1px rgb(100, 100, 100, 0.2);
    }`}

  ${props =>
    props.tentative
      ? `
      & *{
        background-color: ${props => (props.tentative ? `grey` : `white`)};
        color: white!important;
        transition-property:none;

        &:hover {
          opacity:1 !important;
        }
      }
      &:hover {
        & .pill {
          opacity:1;
        }
      }

        `
      : ``}
`;

const mapping = {
    "yes":"completed",
    "no": "pending",
    "in review": "inReview"
}

export default class AppointmentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      status: this.props.type,
      name: this.props.name,
      tentative: this.props.tentative | false
    };
    this.serverConnect = getServerConnect();
  }


  formatStatus(status, date){
      if (status === "no" && isPastDate(date)){
          return "late";
      }
      if (status === "completed" || status === "inReview" || status === "late"){
         return status;
     } else {
         return mapping[status];
     }

  }

  onStatusClick = status => {
    this.serverConnect.changeTestStatus(this.state.id, status);
  };

  render() {
    const { status, name, tentative } = this.state;
    return (
      <Container tentative={tentative}>
        {tentative ? <TimePill status={status}>Tentative</TimePill> : ``}

        <StatusCircle
          type={tentative ? "tentative" : this.formatStatus(this.props.type,  this.props.dueDate)}
        />
        <AppointmentInfo name={name} />
        <IconSet onStatusClick={tentative ? () => {} : this.onStatusClick} />
      </Container>
    );
  }
}
