import React, { Component } from "react";
import { connect } from "react-redux";
import { NEW_STUDENT } from "../actions/types";

export class Student extends Component {
  state = {
    id: 2,
    sname: "",
    grade: "",
    dob: "",
  };
  handleSubmit = (obj) => {
    let aId = this.state.id;
    obj = { ...obj, id: aId };
    this.props.addStudent(obj);
    this.setState({
      id: aId + 1,
    });
  };
  handlechange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div>
          <input type="text" name="sname" onChange={this.handlechange} />
          <input type="text" name="grade" onChange={this.handlechange} />
          <input type="date" name="dob" onChange={this.handlechange} />
          <button onClick={() => this.handleSubmit(this.state)}>submit</button>
        </div>
      </>
    );
  }
}
const mapDispachToProps = (dispatch) => {
  return {
    addStudent: (obj) => dispatch({ type: NEW_STUDENT, payload: obj }),
  };
};
export default connect(null, mapDispachToProps)(Student);
