import React, { Component } from "react";
import Student from "./Student";
import { connect } from "react-redux";
export class StudentList extends Component {
  render() {
    const studentList = this.props.students.map((obj) => {
      return (
        <tr>
          <td>{obj.id}</td>
          <td>{obj.sname}</td>
          <td>{obj.grade}</td>
          <td>{obj.dob}</td>
        </tr>
      );
    });
    return (
      <>
        <Student />
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>grade</th>
              <th>dob</th>
            </tr>
          </thead>
          <tbody>{studentList}</tbody>
        </table>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  students: state.studentStore.students,
});
export default connect(mapStateToProps, null)(StudentList);
