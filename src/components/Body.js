import { useState , useEffect} from "react";
import { RestaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";

//algo to filter
function filterData(searchText, restaurants) {
  const filterData = restaurants.data.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );

  return filterData;
}

export const Body = () => {
  // ... is spread operator

  //searchText is a local variable
  const [restaurants, setRestaurants] = useState(RestaurantList);
  const [searchText, setSearchText] = useState(""); // returns an array - [variable Name , set Function]

  useEffect(() => {
    getRestaurants();
  },[]);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);

    //setRestaurants(json?.data?.cards[2]?.data?.data.cards);
  }



  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search For Food"
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
            const data = filterData(searchText, restaurants); // filterdata will have searchText and restaurants as arguments
            //need to update the state
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant,index) => {
          return <RestaurantCard {...restaurant.data} key = {index}/>;
        })}
      </div>
    </>
  );
};
