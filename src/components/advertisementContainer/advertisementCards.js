import React from "react";

function advertisementCards(props){
    return(
        <div className="advertisement-cards__card display-flex">
            <img src="http://127.0.0.1:3000/img/basket.png" alt="" className="advertisement-cards__img"></img>
            <div className="advertisement-cards__title">{props.title}</div>
            <div className="advertisement-cards__content">{props.content}</div>
        </div>
    )
}

export default advertisementCards;