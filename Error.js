
// const Error=()=>{
    
//     return(
        
// <div>

//     <h1>Oops</h1>
//     <h2>Something went wrong</h2>
// </div>
//     )
// }
// export default Error;
import Contact from "././Contact";
import {Component} from "react";
class Error extends Component{
    constructor(props){
super(props);
this.state={
    UseInfo:{
        
        name: "",
        title: "",
        description: "",
        location:"",
    }
}
    }
     async componentDidMount(){
     const we=await fetch("/Raw.json");
     const jsonvalue=await we.json();
     this.setState({ UseInfo: jsonvalue });
console.log(jsonvalue);
     }

    
    render(){
        const{name,title,description,location}=this.state.UseInfo;
        return(
            <div className="Error">
                <h1 className="a1"></h1>
                <h2 className="a1"></h2>
                <Contact name={"varsha"} location={"allapur"}/>
           <h2 className="a1">{name}</h2>
              <h3 className="a1">{title}</h3>
                <h4 className="a1">{description}</h4>
                <h5 className="a1">{location}</h5>
               
            </div>
        );
    }


}
export default Error;