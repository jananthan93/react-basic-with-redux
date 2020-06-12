import React, { Component } from "react";
import Test from "./Student";
export default class StudentList extends Component {
  state = {
    students: [],
    id: 1,
  };
  handleSubmit = (obj) => {
    let aId = this.state.id;
    obj = { ...obj, id: aId };
    this.setState({
      students: [...this.state.students, obj],
      id: aId + 1,
    });
  };

  render() {
    const studentList = this.state.students.map((obj) => {
      return (
        <tr>
          <td>{obj.id}</td>
          <td>{obj.sname}</td>
          <td>{obj.grade}</td>
          <td>{obj.dob}</td>
        </tr>
      );
    });
    console.log(this.state.students);
    return (
      <>
        <Test handleSubmit={(obj) => this.handleSubmit(obj)} />
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
