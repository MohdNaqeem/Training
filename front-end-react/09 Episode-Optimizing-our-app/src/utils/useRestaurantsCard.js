import { useEffect, useState } from "react";

const useRestaurantList = (url) => {
  const [resData, setResData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(url);
      const json = await data.json();

      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setResData(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (err) {
      console.log("Error fetching restaurants:", err);
    }
  };

  return { resData, filteredRestaurant, setFilteredRestaurant };
};

export default useRestaurantList;
