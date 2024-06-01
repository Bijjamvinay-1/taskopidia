import React from "react";
class Student extends React.Component {
  render(){
    return(
      <div className="col-4 p-4">
        <div className="row">Student Enrolled
        <div className="row border">
          <div className="col-2">   
            <img src= {this.props.Headshot} u
            className="w-100 py-2"
            ></img>
          </div>
          <div className="col-10">
            {this.props.name}
            <br />
            Coding Experience {this.props.experience} Years
          </div>
        </div>
        </div>
      </div>
    );
  }
  
  }
  export default Student;