import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import {useEffect} from 'react';
import SimmerUI from './SimmerUI.js';
import Tools from './Tools.js';

import { useNavigate } from 'react-router-dom';
const BodyData = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    function he(){    
      const f=inputValue.toLowerCase().trim();
      if(f.includes('rent')||f.includes('renttool')||f.includes('tools')){
        navigate('/Tools');
      }
      else if(f.includes('schemes')||f.includes('subsidy')||f.includes('governmentschemes')){
        navigate('/GovtSchemes');
      }
      else if(f.includes('coldstorage')||f.includes('cold storage')||f.includes('godown')){
        navigate('/ColdStorage');
      }
      else{
        alert('No results found try again');
      }
    }

    
    function we(){

      navigate('/Tools');

       
    }
    function we1(){
navigate('/GovtSchemes');
    }
    function we2(){ 
            navigate('/ColdStorage');
            
        }

    return(
      

        <div className="BodyData">
         
       
    
            <div>
            <input
          type="text"
          placeholder="Search  Here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="searchBar"/>
            <button className="search" onClick={he}>Search</button>
              <h1 className='a1 '>The KisanSuraksha is the Farmers User Friendly App</h1>
              <h2 className='a2'>We Provide The Best Services For Farmers</h2>
              <h2 className='a2'>The Features</h2>
              <h3 className='a3'>  Renting tools <br></br> Government Schemes and Subcides<br></br> Cold storage farms</h3>
              
            </div>
            <div>
            
            </div>
            <div className="Features1">
            <div className="Features">
              <img  className="toolrentimage" src="https://www.kisankraft.com/wp-content/uploads/2019/10/farming-equipment-blog.jpg" onClick={we}></img>
                <h3>🛠️Tools Can Be Rented Here</h3>
        <h4> :  Need a tool for a short-term project? Rent high-quality tools at affordable rates! From power drills to gardening equipment, we provide everything you need without the hassle of ownership. Flexible rental periods, easy booking, and hassle-free returns.

<br></br>🔹 Save Money : No need to buy expensive tools for one-time use.
<br></br>🔹 Wide Selection :Construction, DIY, automotive, and more.
<br></br>🔹 Easy Rental Process :Reserve online & pick up or get it delivered.</h4>
            

            </div>
            <div className="Features">
                <img className="toolrentimage" src="https://khetigaadi.com/blog/wp-content/uploads/2021/09/Agriculture-Sector-1.jpg" onClick={we1}></img>
                <h3>🚜 Government Schemes & Subsidies for Farmers 🌾</h3>
                <h4>

Stay updated on the latest agricultural schemes and subsidies designed to support farmers! We provide real-time updates on:

<br></br>✅ New Government Initiatives 🌱
<br></br>✅ Subsidies on Seeds, Fertilizers & Equipment 💰
<br></br>✅ Loan & Credit Facilities for Farmers 🏦
<br></br>✅ Minimum Support Price (MSP) Updates 📊
<br></br>✅ Irrigation & Crop Insurance Schemes 💧🌾</h4>

            </div>
            <div className="Features">

            <img className="toolrentimage" src="https://voitco.com/wp-content/uploads/2023/10/cold-storage-blog_3.jpg" onClick={we2}></img>
            <h3>❄️ Cold Storage & Godown Facilities for Farmers 🏢 </h3>
            <h4>

Get real-time updates on cold storage units and godown facilities near you! We help farmers and agribusinesses store their produce safely and efficiently.

<br></br>🔹 Cold Storage Locations - Find refrigerated storage for perishable goods.

<br></br>🔹 Rental & Subsidy Information - Get details on costs & government support.
<br></br>🔹 Storage Capacity & Facilities - Know the best options for your needs.</h4>
                </div>
                </div>

        </div>

    );
 
  };
  export default BodyData;