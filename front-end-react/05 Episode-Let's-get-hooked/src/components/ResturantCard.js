// Card component
const ResturantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, rating, deliveryTime, imageId, area, offer, price } =
    resData;

  return (
    <div className="res-card">
      <img
        src={resData.imageId}
        alt={resData.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "7px",
        }}
      />

      <h3>{name}</h3>
      <h3>{cuisines.join(',')}</h3>
      <h3>{rating}</h3>
      <h3>{deliveryTime}</h3>
      <h3>{area}</h3>
      <h3>{price}</h3>
      <h3>{offer}</h3>
    </div>
  );
};

export default ResturantCard