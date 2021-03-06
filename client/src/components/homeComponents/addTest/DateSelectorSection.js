import React from "react";
import styled from "styled-components";
import TitleTab from "./TitleTab";
import CalendarTable from "../../calendarComponents/Calendar";
import FrequencySetter from "./FrequencySetter";

const Container = styled.div`
  position: relative;
  width: 50%;
  background: white;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SecondHalfDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 45%;
  top: 55%;
  left: 0;
  background: none;
  z-index: 0;
`;
const TextArea = styled.textarea`
  width: 94%;
  height: 60%;
  resize: none;
  outline: none;
  border: none;
  padding: 3%;
  background: white;
`;
const DateInput = styled.input`
  align-items: center;
  cursor: pointer;
  z-index: 2;
  margin: 3% 0;
  text-align: center;
  border-radius: 10px;
  background-color: #0b999d;
  color:white;
  height: 8%;
  font-weight: bold;
  font-size: 130%;

  &:hover {
    background-color: #018589;
  }
`;

export default props => {
  return (
    <>
      <Container>
        <TitleTab color="#0b999d">Date</TitleTab>
        <DateInput
          type="text"
          onClick={props.onInputClick}
          value={props.selectedDate}
          readOnly
        />
        {props.showCalendar ? (
          <CalendarTable outsideClick={props.onCalendarClose} onDayPick={props.onDayPick} />
        ) : (
          <></>
        )}
        <FrequencySetter
          noRepeat={props.noRepeat}
          setFrequencyTooltip={props.setFrequencyTooltip}
          setOcurrencesTooltip={props.setOcurrencesTooltip}
          tooltips={{
            frequency: props.tooltips.frequency,
            occurrences: props.tooltips.occurrences
          }}
          frequency={props.frequency}
          occurrences={props.occurrences}
          onNoRepeatChange={props.onNoRepeatChange}
          unitOptions={props.unitOptions}
          timeAmount={props.timeAmount}
          timeUnit={props.timeUnit}
          onSliderChange={value => props.onTimeAmountChange(value)}
          onSelectChange={value => props.onUnitChange(value)}
          onOccurrenceChange={value => props.onOccurrenceChange(value)}
        />

        <SecondHalfDiv>
          <TitleTab
              color={"#0b999d"}
              height={"28%"}
          >Notes
          </TitleTab>
          <TextArea
            onChange={event => props.onObservationsChange(event.target.value)}
            placeholder={"(optional)"}
          />
        </SecondHalfDiv>
      </Container>
    </>
  );
};
