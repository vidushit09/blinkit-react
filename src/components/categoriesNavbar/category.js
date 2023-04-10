import React from "react";
import { Link} from "react-router-dom";

function category(props){
    return(
        <Link to="/">
        <li className="category-list__list-item display-flex" onClick={()=>props.categoryClick(props.category)}>{props.category}</li>
        </Link>
    )
}

export default category;