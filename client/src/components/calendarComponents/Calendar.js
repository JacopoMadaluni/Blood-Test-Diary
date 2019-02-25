import React, { Component } from 'react';
import './Calendar.css';
import './CalendarFunctions.js';
import DayCell from './DayCell.js';
import CalendarHeader from './CalendarHeader.js';

const WEEK_DAYS = 7;

function getDaysInMonth(year, month){
  return new Date(year, month, 0).getDate();
}

function getYearOf(date){
  return date.getFullYear(date);
}

function getMonthOf(date){
  return date.getMonth();
}

function getFirstDayOf(year, month){
  return new Date(year, month, 1).getDay();
}


let days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

var dayBelongsToCurrentMonth = false;

function getCalendar(date){
  let currentYear = getYearOf(date);
  let currentMonth = getMonthOf(date);
  let firstDay = getFirstDayOf(currentYear, currentMonth); //first week day of the month
  let lastDay = getDaysInMonth(currentYear, currentMonth); //days in the month
  console.log(currentYear,currentMonth,"first day: "+days[firstDay],"total days: "+lastDay);
  let prevMonthLastDay = getDaysInMonth(currentYear, currentMonth-1);
  let arrCalendar = [];
  let calendar = [];
  let whiteCells = 0;

  for (let i = 0; i < firstDay; ++i) {
    arrCalendar.unshift(prevMonthLastDay-i);
  }

  for (let i = 0; i < lastDay;) {
    arrCalendar.push(++i);
  }

  whiteCells = WEEK_DAYS - (arrCalendar.length%WEEK_DAYS);

  for (let i = lastDay; whiteCells > 0; ++i) {
    arrCalendar.push(i - lastDay + 1);
    whiteCells--;
  }
  
  let rows = arrCalendar.length/WEEK_DAYS;
  
  for(let i = 0; i < rows; ++i){
    calendar[i] = new Array(WEEK_DAYS);
    for(let j = 0; j < WEEK_DAYS; j++){
      calendar[i].push(arrCalendar[WEEK_DAYS*i + j]);
    }
  }
  return calendar;
}

class CalendarTable extends Component {
  constructor(props){
    super(props);
    let currentDate = new Date();
    this.state = {
      date: currentDate,
      calendar: getCalendar(currentDate),
      selected: null
    };

    this.select = this.select;
    this.nextMonth = this.nextMonth;
    this.prevMonth = this.prevMonth;
    this.getDaysInMonth = getDaysInMonth;
    this.prevMonth = () => {
      let date = this.state.date;
      let newDate = new Date(date.setMonth(date.getMonth() - 1));
      this.setState({date: newDate,
                     calendar: getCalendar(newDate)});
    };
    this.nextMonth = () => {
      let date = this.state.date;
      let newDate = new Date(date.setMonth(date.getMonth() - 1));
      this.setState({date: newDate,
                     calendar: getCalendar(newDate)})
    };
    this.selectDay = (day) => {
      console.log(this.date.getFullYear() + "-" + (this.date.getMonth()+1) + "-" + day);
      this.setState({selected: day});
    };
  }
  
  render() {
    return (
      <table id={'daysTable'} cellPadding={0} cellSpacing={0}>
        <thead>
          <CalendarHeader currentDate={this.state.date} 
                          prevMonth={this.prevMonth}
                          nextMonth={this.nextMonth}/>
          <tr>  
            {days.map((day) => {
              return (
                <th key={day}>
                  {day}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {this.state.calendar.map((row, trIndex) => {
            return(
              <tr key={trIndex}>
                {row.map((day, tdIndex) => {
                    if(day === 1) {
                      dayBelongsToCurrentMonth = !dayBelongsToCurrentMonth;
                    }
                    return(
                      <td key={tdIndex} className={`${(dayBelongsToCurrentMonth) ? "in" : "out"} day`}>
                        {<DayCell selectDay={this.selectDay}
                                  dayOfMonth={day} 
                                  isFromThisMonth={dayBelongsToCurrentMonth}/>}
                      </td>
                    );
                  }
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default CalendarTable;
