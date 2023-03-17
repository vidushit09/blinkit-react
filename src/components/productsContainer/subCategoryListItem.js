import React  from "react";

function subCategoryListItem(props){
    let path= "http://127.0.0.1:3000/"+props.subCategory.categoryThumbnail;
    return(
        <>
            <li  className={props.currSubCategory==props.subCategory.subCategory? "products-container__category--active display-flex" : "products-container__category--inactive display-flex" } onClick={props.subCategoryOnClick}>
                <div className="products-container__category__category-image">
                    <img src={path} className="products-container__category-image-img" />   
                </div>{props.subCategory.subCategory}
            </li>
        </>
    )
}


export default subCategoryListItem;
