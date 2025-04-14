import { CDN_URL } from "../utils/constant";

const ResCard = (props) => {
    const {resData} = props;
    const {name, cuisines, avgRating, cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
   return (
     <div className="res-card">
       <img
         src={CDN_URL + cloudinaryImageId}
         alt="img"
         className="res-logo"
       />
       <h4>{name}</h4>
       <h6>{cuisines.join(", ")}</h6>
       <h6>{avgRating} stars</h6>
       <h6>{deliveryTime} minutes</h6>
     </div>
   );
 };

 export default ResCard;