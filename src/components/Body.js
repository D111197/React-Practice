import HotelCard from "./HotelCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {

 const [Listofhotels, setListofhotels] = useState([]);
 const [FilterListofhotels, setFilterListofhotels] = useState([]);

 const [searchText, setsearchText] = useState("");


 useEffect(() => {
     fetchData();
 }, []);


 const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4889075&lng=77.2991067&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  const json = await data.json();
  
  console.log(json)
  setListofhotels(json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilterListofhotels(json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

 }
   

  return Listofhotels.length === 0 ? (<Shimmer /> ) :
  (
    <div className="body">
      <div className="search">
        <input type="text"  className="search-box" value={searchText} onChange={(e) => {
          setsearchText(e.target.value);
        }}/>
        <button className="search-btn" onClick={() => {

          const filter = Listofhotels.filter((hot) => hot.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilterListofhotels(filter);
         
        }}>Search hear</button>
      </div>
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            filterdhotels  = Listofhotels.filter((hot) => hot.info.avgRating > 4);
            setFilterListofhotels(filterdhotels)
          }}
        >
          Top Rated Hotel
        </button>
      </div>
      <div className="hotel-container">
        {FilterListofhotels.map((hotel) => (
          <HotelCard key={hotel.info.id} hotdata={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Body;
