import RestaurantCard from "./RestaurantCard";
import resList from "../config/mockdata";

const Body=()=>{
    return (
        <div className="body">
            <div className="Filter">
                <button className="filter-btn" onClick={()=>{}}>Top rated restaurants</button>
            </div>
            <div className="res-container">
                {resList.map((restaurant)=><RestaurantCard  key={restaurant.info.id} resData={restaurant}/>)}
            </div>

        </div>
    )
}

export default Body