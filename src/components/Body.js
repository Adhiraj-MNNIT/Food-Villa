import { useState } from "react";
import { RestaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";

//algo to filter
function filterData(searchText , restaurants) {
  
    const filterData =  restaurants.filter((restaurant) => 
    restaurant.name.includes(searchText)
    );
    
    return filterData;
}

export const Body = () => {
  // ... is spread operator

  //searchText is a local variable
  const [restaurants , setRestaurants] = useState(RestaurantList);
  const [searchText, setSearchText] = useState(""); // returns an array - [variable Name , set Function]

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            //e.target.value => whatever written in input
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText , restaurants);// filterdata will have searchText and restaurants as arguments
            //need to update the state
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant , index) => {
          return <RestaurantCard {...restaurant} key = {index}/>;
        })}
      </div>
    </>
  );
};
