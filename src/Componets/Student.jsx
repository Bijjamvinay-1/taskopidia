
export default function Student(props){
    return(
      <div className="col-4 p-4">
        <div className="row">Student Enrolled
        <div className="row border">
          <div className="col-2">   
            <img src= {props.Headshot} u
            className="w-100 py-2"
            ></img>
          </div>
          <div className="col-10">
            {props.name}
            <br />
            Coding Experience {props.experience} Years
          </div>
        </div>
        </div>
      </div>
    )
  
  }