import ResturantCard from "./ResturantCard";
import { useState } from "react";
import Shimmmer from "./Shimmer";
import { RES_CARD_URL } from "../utils/constants";
import useRestaurantsCard from "../utils/useRestaurantsCard";
import useOnlineStatus from "../utils/usenlineStatus";

// Body component
const Body = () => {
  // for searc box
  const [searchText, setSearchText] = useState("");

  const { resData, filteredRestaurant, setFilteredRestaurant } =
    useRestaurantsCard(RES_CARD_URL);

  const onlinStatus = useOnlineStatus();

  if (onlinStatus === false)
    return (
      <h1>
        Looks like you're offline!!! Please check your internet connection
      </h1>
    );

  return resData.length === 0 ? (<Shimmmer/>) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          placeholder="Search to get resturants"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = resData.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = resData.filter(
              (res) => res?.info?.avgRating > 4.2
            );
            setFilteredRestaurant(filterData);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
