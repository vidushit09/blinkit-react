import React from "react";
import AdvertisementCards from "./advertisementCards";

function advertisementContainer(){
    return(
        <div className="advertisement-cards display-flex">
            <AdvertisementCards title="Superfast Delivery" content="Get your order delivered to your doorstep at the earliest from dark stores near you" />
            <AdvertisementCards title="Best Prices & Offers" content="Best price destination with offers directly from the manufacturers" />
            <AdvertisementCards title="Wide Assortment" content="Choose from 5000+ products across food, personal care, household & other categories" />
        
        </div>
    )
}

export default advertisementContainer;