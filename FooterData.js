import {contact} from "../urls/constants.js";
const FooterData = () => {
    return (
      <div className="FooterData">
        <div className="footer">
          <div>
            <h2> CONTACT            </h2>
            <h3>9346753510 <img  className="contactimage"src={contact} alter="image" ></img></h3>
            <h4> reshmausirkepally@gmail.com</h4>
          
          </div>
          <div>
          <h3>ABOUT US</h3>
          <h4>Co partner of Kisansuraksha</h4>
          <h4>  india</h4>

          </div>
         <div>
         <h3>PRIVACY POLICY</h3>
         <h4>Customer privacy matter</h4>
         <h4>contact privacy no:290383...</h4>
         </div>
        <div>
        <h3>TERMS AND CONDITIONS</h3>
        <h4>terms and conditions apply</h4>
        <h4>we are here to help u...</h4>
        </div>
          
        </div>
      </div>
    );
  };
  export default FooterData;