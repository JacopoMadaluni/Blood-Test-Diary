import React from "react";
import styled from "styled-components";

import WeekDaySection from "./calendarComponents/WeekDaySection";
import ScrollBox from "./calendarComponents/ScrollBox";
import AppointmentSection from "./calendarComponents/AppointmentSection";
import { DropTarget } from "react-dnd";
import "../../styles/ongoingWeekly.css";

const Container = styled.div`
  margin: 3px;
  padding: 0%;
  width: auto;
  height: 100%;
  overflow: hidden;
  background: ${props => props.background ? props.background : "white"};
  
`;

function collect(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    hightlighted: monitor.canDrop(),
    item: monitor.getItem()
  }
}

const spec = {
  drop: function(props, monitor, component){
    return {newDate: props.date}
  },
  hover: function(props, monitor, component){
  }
}

class OngoingWeekly extends React.Component {

  constructor(props){
      super(props);
  }


  render() {
    const { connectDropTarget, hovered, item} = this.props;
    const backgroundColor = hovered ? "#dbfffc" : "white";
    return connectDropTarget(
     <div className="ongoingWeekly">
        <Container background={backgroundColor}>
          <WeekDaySection
            notificationNumber={
              this.props.notificationNumber
                ? this.props.notificationNumber
                : "0"
            }
            dayName={"This week"}
          />
          <ScrollBox>
            <AppointmentSection
              type="Appointments"
              appointments={this.props.anytimeAppointments}
              section={"ongoing"}
              editTest={this.props.editTest}
              editPatient={this.props.editPatient}
              handleError={this.props.handleError}
              section={"ongoing"}
            />
            <div style={{width:"100%",height:"45px"}}/>
          </ScrollBox>
        </Container>
    </div>
    );
  }
}

export default DropTarget("appointment", spec, collect)(OngoingWeekly);
