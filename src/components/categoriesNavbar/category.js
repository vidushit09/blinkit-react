import React from "react";

function category(props){
    return(
        <li className="category-list__list-item display-flex" onClick={()=>props.categoryClick(props.category)}>{props.category}</li>
    )
}

export default category;