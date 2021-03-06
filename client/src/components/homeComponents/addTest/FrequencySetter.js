import React from "react";
import styled from "styled-components";
import LabelAndSelector from "./LabelAndSelector";
import TextRadioButton from "../editTest/TextRadioButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index:2;
  width: 90%;
`;

export default props => {
  return (
    <Container>
      <LabelAndSelector
        setFrequencyTooltip={props.setFrequencyTooltip}
        setOcurrencesTooltip={props.setOcurrencesTooltip}
        tooltips={{
          frequency: props.tooltips.frequency,
          occurrences: props.tooltips.occurrences
        }}
        frequency={props.frequency}
        occurrences={props.occurrences}
        noRepeat={props.noRepeat}
        timeAmount={props.timeAmount}
        options={props.unitOptions}
        onValueChange={value => props.onSliderChange(value)}
        onOccurrenceChange={value => props.onOccurrenceChange(value)}
        onSelectChange={timeUnit => {
          props.onSelectChange(timeUnit);
        }}
      />
      <TextRadioButton
        checked={props.noRepeat}
        text="Does not repeat"
        onCheck={check => {
          return props.onNoRepeatChange(check);
        }}
      />
    </Container>
  );
};
