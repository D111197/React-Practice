import { CDN_URL } from "../utiles/contants";

const HotelCard = (props) => {
  const { hotdata } = props;

  const { name, costForTwo, cuisines, avgRating, cloudinaryImageId } =
    hotdata?.info;
  return (
    <div className="Hot-card">
      <img className="logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default HotelCard;
