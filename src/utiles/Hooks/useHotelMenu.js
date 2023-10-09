import { useEffect, useState } from "react";
import { Menu_URL } from "../contants";

const useHotelMenu = (hotId) => 

{
    const [HotInfo, setHotInfo] =useState(null);
  
     useEffect(() => {
     fetchmenu();
     }, [])
 
     const fetchmenu = async () => {
         const data= await fetch(Menu_URL + hotId );
         
         const json = await data.json();
 
         console.log(json)
         setHotInfo(json.data)
     }
     
     return HotInfo;

  };

export default useHotelMenu; 