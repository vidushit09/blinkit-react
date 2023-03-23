import React from "react";

function categoryMore(props){
    let list=props.categories.map((category,index)=> {
        return(
            <li  onClick={()=>props.categoryClick(category)} key={index}>{category}</li>
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