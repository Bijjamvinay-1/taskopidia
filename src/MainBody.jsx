import Student from "./Componets/Student"

export default function MainBody(){
    const WhatWeWilllearn ="React Js";
    const LectureCount = 3
  return(
    <div style={{minHeight: "70vh"}}>
      <p className="heading">In this Course , we will learn the {WhatWeWilllearn} by building Taskopedia!<br/>
      Total Lecture - {LectureCount}
      </p>
      <ul>  
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      
      <div className="container"></div>
    <Student experience={2} name="bijjam vinay" Headshot = "https://api.lorem.space/image/face?w=150&h=150"/>
    <Student experience={7} name="Anand Prasad" Headshot = "https://api.lorem.space/image/face?w=150&h=152"/>
    <Student experience={9} name="Ram" Headshot = "https://api.lorem.space/image/face?w=150&h=151"/>
    </div>
  )
  }
  
  