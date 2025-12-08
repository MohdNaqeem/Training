import { CDN_URL } from "../utils/constants";

// Card component
const ResturantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData.info;

  return (
    <div className="res-card">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-card-title">{name}</h3>
      <h4 className="res-card-cuisines">{cuisines.join(", ")}</h4>
      <h3 className="rating">{avgRating} ⭐</h3>
      <h3 className="price">{costForTwo} </h3>
      <h4 className="delivery">{sla.slaString}</h4>
    </div>
  );
};

export default ResturantCard;
