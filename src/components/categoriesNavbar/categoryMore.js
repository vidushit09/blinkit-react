import React from "react";
import { Link} from "react-router-dom";

function categoryMore(props){
    let list=props.categories.map((category,index)=> {
        return(
            <Link to="/">
            <li  onClick={()=>props.categoryClick(category)} key={index}>{category}</li>
            </Link>
        )
        
    });
    return(
            <li className="category-list__list-item display-flex" id="more">
                More
                <i className="fa fa-angle-down"></i>
                <ul id="dropdown">{list}</ul>
            </li>

        
    )
}

export default categoryMore;