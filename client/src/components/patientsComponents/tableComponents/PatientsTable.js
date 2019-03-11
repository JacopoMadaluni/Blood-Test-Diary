import React from "react";
import styled from 'styled-components';

import PatientRow from "./PatientRow.js";
import FilterCell from "./FilterCell.js";

const Table = styled.table`
  width: 100%;
  height: 100%;
`;

const TableHeader = styled.thead`
   display: table;
   width: 100%;
`;

const TableBody = styled.tbody`
    display: block;
    max-height: 80%; //change this to increase height of table
    overflow-y: scroll;
`;

const TableHead = styled.th`
    width: 16.66%;  //TODO : change this to number of 100/columns
    padding: 10px;
    //word-break: break-all;
    color: white;
    border-collapse: collapse;
    background: #0b989d;
    :first-child {
      border-left: none;
    }
    border-left: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
    display: table;
    width: 100%;
    box-sizing: border-box;
`;

class PatientsTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            patients: props.allPatients,
        }
    }

    number_filter = value => {
        if (value == "") { this.setState({patients: this.props.allPatients})}
        else{
            this.setState({
              patients: this.props.allPatients.filter(
                patient => patient.patient_no.includes(value)
              )
            });
        }
    };

    name_filter = value => {
        if (value == "") { this.setState({patients: this.props.allPatients})}
        else{
            this.setState({
              patients: this.props.allPatients.filter(
                patient => patient.patient_name ? patient.patient_name.includes(value) : false
              )
            });
        }
    };

    surname_filter = value => {
        if (value == "") { this.setState({patients: this.props.allPatients})}
        else{
            this.setState({
              patients: this.props.allPatients.filter(
                patient => patient.patient_surname ? patient.patient_surname.includes(value) : false
              )
            });
        }
    };

    email_filter = value => {
        if (value == "") { this.setState({patients: this.props.allPatients})}
        else{
            this.setState({
              patients: this.props.allPatients.filter(
                patient => patient.patient_email ? patient.patient_email.includes(value) : false
              )
            });
        }
    };

    phone_filter = value => {
        if (value == "") { this.setState({patients: this.props.allPatients})}
        else{
            this.setState({
              patients: this.props.allPatients.filter(
                patient => patient.patient_phone ? patient.patient_phone.includes(value) : false
              )
            });
        }
    };

    render() {
        //TODO : change class names
        return (
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Patient number</TableHead>
                    <TableHead>Patient name</TableHead>
                    <TableHead>Patient surname</TableHead>
                    <TableHead>Patient email</TableHead>
                    <TableHead>Patient phone</TableHead>
                    <TableHead></TableHead>
                </TableRow>
                <TableRow>
                    <FilterCell
                        onChange={value => this.number_filter(value)}
                        placeholder={"Search numbers ..."}
                    />
                    <FilterCell
                        onChange={value => this.name_filter(value)}
                        placeholder={"Search names ..."}
                    />
                    <FilterCell
                        onChange={value => this.surname_filter(value)}
                        placeholder={"Search surnames ..."}
                    />
                    <FilterCell
                        onChange={value => this.email_filter(value)}
                        placeholder={"Search emails ..."}
                    />
                    <FilterCell
                        onChange={value => this.phone_filter(value)}
                        placeholder={"Search phones ..."}
                    />
                    <FilterCell
                    />
                </TableRow>
                </TableHeader>
                <TableBody>
                {this.state.patients.map(patient => (
                    <PatientRow
                        key={patient.patient_no}
                        patient_no = {patient.patient_no}
                        patient_name = {patient.patient_name}
                        patient_surname = {patient.patient_surname}
                        patient_email = {patient.patient_email}
                        patient_phone = {patient.patient_phone}
                        openModal = {this.props.openModal}
                    />
                ))}
                </TableBody>
            </Table>
        );
    }
}

export default PatientsTable;