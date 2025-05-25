import React from 'react';
import rootData from '../urls/RawData.js';
import RestroCards from './RestroCards.js';
import { useState } from 'react';
import {useEffect} from 'react';
import SimmerUI from './SimmerUI.js';

const Tools = () => {
    const [restroData,setRestroData]=useState(rootData
        
        );
        const [filterdata,setfilterdata]=useState('');
        const [RData,setRData]=useState(rootData);
        
        if(restroData===0){
         <SimmerUI/>
        }
      
            
 return (
    <div className="BodyData">
      <div >
        <input
          type="text"
          placeholder="Search for tools..."
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
        item.tool_name.toLowerCase().includes(filterdata.toLowerCase())
      );
     
    if (filtered.length === 0) {
      alert('No results found');
    }
    

    setRData(filtered);
  }}
>
  Search
</button>




      </div>
      <div className="filter">
        <button className="filterButton" onClick={()=>{ 
             const filterone=restroData.filter((res)=>res.rating>3);
            setRData(filterone);
         console.log(filterone);}
          }>For Top Rated Tools
                             </button>
      </div>
      <div className="contentData">
        {  
        RData.map(item =>
         
            
            <RestroCards
            key={item.tool_id}
              id={item.item_id}
              name={item.tool_name}
              tool={item.type}
              price={item. rental_price_per_hour}
              image={item.image} 
              status={item.availability}
              power={item.specifications.horsepower||0}
              weight={item.specifications.weight||"N/A"}
              fuel={item.specifications.fuel_type||"N/A"}
              capacity={item.specifications.capacity ||"N/A"}
              rating={item.rating}
              

            />
       
        )}
      </div>
    </div>
  );
};

export default Tools;