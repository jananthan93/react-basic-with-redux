import React, { Component } from "react";
export default class Test extends Component {
  state = {
    sname: "",
    grade: "",
    dob: "",
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
          <button onClick={() => this.props.handleSubmit(this.state)}>
            submit
          </button>
        </div>
      </>
    );
  }
}
