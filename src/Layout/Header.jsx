import logo from "../images/React.png"

function Mainheader(){
    return (
      <div className="pt-3 pl-2" style={{backgroundColor: "black"}}>
        <img src ={logo} style={{height : "35px", verticalAlign: "top"}}></img>
        <span className="h2 pt-4 text-white-50">React Course - TaskOPedia</span>
      </div>

    );
}
  
  const SubheaderStyle ={
    color : "black-pink-red",
    backgroundColor : "white"
  }
  
  function Subheader(){
    
    return <p style={SubheaderStyle} className="text-center">This will be an exciting Course</p>;
  
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