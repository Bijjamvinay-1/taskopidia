import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './hearder';
import Student from './Student';

const root = ReactDOM.createRoot(document.getElementById('root'));

function MainBody(){
  const WhatWeWilllearn ="React Js";
  const LectureCount = 3
return(
  <div>
    <p className="heading">In this Course , we will learn the {WhatWeWilllearn} by building Taskopedia!<br/>
    Total Lecture - {LectureCount}
    </p>
    <ul>  
      <li>Basic Foundation</li>
      <li>Functional and Class Components</li>
    </ul>
  </div>
)
}

function Footer(){
  return(<p style={{color:"gray",backgroundColor:"black"}}>Happy Coding!</p>)
}

root.render(
  <div>
    <Header />
    <MainBody />
    <div className="container"></div>
    <Student experience={2} name="bijjam vinay" Headshot = "https://api.lorem.space/image/face?w=150&h=150"/>
    <Student experience={7} name="Anand Prasad" Headshot = "https://api.lorem.space/image/face?w=150&h=152"/>
    <Student experience={9} name="Ram" Headshot = "https://api.lorem.space/image/face?w=150&h=151"/>
    <Footer />
  </div>
);
