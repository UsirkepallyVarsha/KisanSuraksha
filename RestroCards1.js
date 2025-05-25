import {  useNavigate } from "react-router-dom";
import ToolRentalForm from "./ToolRentalForm";
const RestroCards1=(props)=>{
    const navigate=useNavigate();
    const he = () => {
   
        navigate('/ToolRentalForm');
      
        };
    return(

<div className="Lines">
<h1>{props.name}</h1>
<h2>{props.description}</h2>
<h2>{props.eligibility}</h2>
<h2>{props.benefits}</h2>
<h3>{props.applicationProcess}</h3>
<h1>{props.contactInfo}</h1>

    <button className="btn" onClick={he}>Apply Now</button>
    </div>
    );



    
}
export default RestroCards1;