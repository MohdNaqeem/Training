import ResturantCard from "./ResturantCard";
import resList from "../utils/resData";
import { useEffect, useState } from "react";

// Body component
const Body = () => {
  let [resData, setresData] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json)

    setresData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = resData.filter((res) => res.rating > 4);
            setresData(filterData);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {resData.map((resturant) => (
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
