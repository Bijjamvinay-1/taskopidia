
export default function Students(props){
    return(
      <div className="Container p-4">
        <div className="row">Student Enrolled</div>
        <div className="row border">
          <div className="col-2">
            <img src= {`https://ui-avatars.com/api/?name=${props.name}`}
            className="w-100"
            ></img>
          </div>
          <div className="col-10">
            {props.name}
            <br />
            Coding Experience {props.experience} Years
          </div>
  
        </div>
      </div>
    )
  
  }