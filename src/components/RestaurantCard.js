import {CDN_URL} from "../config/constant";

const RestaurantCard=(props)=>{

   // console.log(props)

    const {resData}=props
    const{name,cloudinaryImageId,costForTwo,cuisines,avgRatingString,sla}=resData?.info//optional chaining
    


    return (
        <div className="res-card">
            <img className="card-logo" src={CDN_URL+cloudinaryImageId} alt="Image not found" />
            <h2>{name}</h2>
            <h4>{sla.deliveryTime} mins</h4>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default RestaurantCard;