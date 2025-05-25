import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider,Outlet } from "react-router-dom";
import HeaderData from "./components/HeaderData";
import FooterData from "./components/FooterData";
import BodyData from "./components/BodyData";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"; 
import Login from "./components/Login";
import Tools from "./components/Tools";
import ColdStorage from "./components/ColdStorage";
import  GovtSchemes from "./components/GovtSchemes";
import ToolRentalForm from "./components/ToolRentalForm";
const Appcontent = () => {
  return (
    <div className="Appcontent">
       <div className="video-background video">
          <video autoPlay loop muted>
        <source src="https://media.istockphoto.com/id/1412613368/video/aerial-view-irrigation-system-watering-soybean-field-at-sunset.mp4?s=mp4-640x640-is&k=20&c=zVLD9i1PfO_TcQdRlV7V1FpmIckNwkKQneIG1Oa4wjo=" type="video/mp4"/>
    </video>

          </div>
      
      <HeaderData />
     <Outlet/>
      <FooterData />
    </div>
  );
};

const App = createBrowserRouter([
{
  path:"/",
  element:<Appcontent/>,
  children:[
      
  {
    path:"/",
    element:<BodyData/>,
    errorElement:<Error/>
  },
   
  {
    path:"/About",
    element:<About/>,
    errorElement:<Error/>
  },{
    path:"/Contact",
    element:<Contact/>,
    errorElement:<Error/>
  },
  {
    path:"/Error",
    element:<Error/>,
    errorElement:<Error/>
  },
  {
    path:"/Login",
    element:<Login/>,
    errorElement:<Error/>
  }
  ,
  {
    path:"/Tools",
    element:<Tools/>,
    errorElement:<Error/>
  },{
    path:"/GovtSchemes",
    element:<GovtSchemes/>, 
    errorElement:<Error/>

  },
  {
    path:"/ColdStorage",
    element:<ColdStorage/>, 
    errorElement:<Error/>
  },{
    path:"/ToolRentalForm",
    element:<ToolRentalForm/>,
    errorElement:<Error/>
  }
]

//   errorElement:<Error/>
// },
// {
//   path:"/About",
//   element:<About/>,
//   errorElement:<Error/>
// },{
//   path:"/Contact",
//   element:<Contact/>,
//   errorElement:<Error/>
 }
])

   
// Render App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={App} />);
