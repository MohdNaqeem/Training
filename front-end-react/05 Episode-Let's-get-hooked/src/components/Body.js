import ResturantCard from "./ResturantCard";
import resList from "../utils/resData";
import { useState } from "react";

// Body component
const Body = () => {
  let [resData, setresData] = useState(resList);

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
          <ResturantCard key={resturant.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
