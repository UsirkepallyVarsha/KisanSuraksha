import ToolRentalForm from "./ToolRentalForm";
import { useNavigate } from "react-router-dom";

const RestroCards = (props) => {
  const navigate=useNavigate();
  const he = () => {
   
  navigate('/ToolRentalForm');

  };
 
  return (
    <div className="RestroCards">
      <img className="card" src={props.image} alt={props.id} />
      
      <h4>Name:{props.name}</h4>
      <h4>Usage: {props.tool}</h4>
      <h4> Price:{props.price}</h4>
      <h4>Status:{props.status}</h4>
      <h4>Power:{props.power}</h4>
      <h4>Weight:{props.weight}</h4>
      <h4>Fuel :{props.fuel}</h4>
      <h4>Capacity_fuel:{props.capacity}</h4>
      <h4>Rating:{props.rating}</h4>
      <button className="btn" onClick={he}>Rent Now</button>
      
    </div>
  );
};
export default RestroCards;