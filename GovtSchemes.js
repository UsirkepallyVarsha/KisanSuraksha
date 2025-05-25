import React from 'react';
import Govt from '../urls/govtrawdata.js';
import RestroCards1 from './RestroCards1.js';
import { useState } from 'react';
const GovtSchemes=()=>{
   

      const [restroData,setRestroData]=useState(Govt
        
        );
        const [filterdata,setfilterdata]=useState('');
        const [RData,setRData]=useState(Govt);
        
        if(Govt===0){
         <SimmerUI/>
        }
      
            
 return (
    <div className="BodyData">
      <div >
        <input
          type="text"
          placeholder="Search for Schemes"
          className="searchBar"
           value={filterdata} onChange={(e)=>{setfilterdata(e.target.value)}}/>

<button
  className="search"
  onClick={() => {
    if (filterdata.trim()==='') {
      setRData(restroData); 
      return;
    }
    const filtered 
     = restroData.filter((item) =>
        item.name.toLowerCase().includes(filterdata.toLowerCase())
      );
     
    if (filtered.length === 0) {
      alert('No results found');
    }
    

    setRData(filtered);
  }}
>
  Search
</button>
<h1>CENTRAL GOVERNMENT SCHEMES AND SUBCIDIES</h1>




      </div>
     
      <div className="contentData">
        {  
        RData.map(item =>
         
           
            
             
                <RestroCards1 
   key={item.id}
   name={item.name}
   description={item.description}
   eligibility={item.eligibility}
   benefits={item.benefits}
   applicationProcess={item.applicationProcess}
   contactInfo={item.contactInfo}
                />
              
              
              
              

       
       
        )}
      </div>
    </div>
  );

}
export default GovtSchemes;