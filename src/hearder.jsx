function Mainheader(){
    return <h1>REACT COURSE</h1>;
}
  
  const SubheaderStyle ={
    color : "blue",
    backgroundColor : "lightgary"
  }
  
  function Subheader(){
    
    return <p style={SubheaderStyle}>This will be an exciting Course</p>;
  
  }
  
  
  export default function Header(){
    return (
        <div>
          <Mainheader></Mainheader>
          <Subheader></Subheader>
         
        </div>
      )
  }
   
//   or 
//  export default Header;