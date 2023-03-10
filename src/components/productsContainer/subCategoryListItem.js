import React  from "react";

function subCategoryListItem(props){
    return(
        <>
            <li  className={props.currSubCategory==props.subCategory.subCategory? "products-container__category--active display-flex" : "products-container__category--inactive display-flex" } onClick={props.subCategoryOnClick}>
                <div className="products-container__category__category-image">
                    <img src="/apple.png" className="products-container__category-image-img" />   
                </div>{props.subCategory.subCategory}
            </li>
        </>
    )
}


export default subCategoryListItem;
