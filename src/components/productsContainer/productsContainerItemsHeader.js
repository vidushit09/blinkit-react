import React from "react";

function productsContainerItemsHeader(props) {
    return (
        <div className="products-container__items-header display-flex">
            <div className="products-container__buy-fresh-online">
                Buy Fresh Vegetables Online
            </div>
            <div className="products-container__items-header-right display-flex">
                <div className="products-container__sort">Sort By</div>
                <select
                    name="dropdown"
                    id="sort-dropdown"
                    className="products-container__dropdown"
                     onChange={props.sortBy}
                >
                    <option>Relevance</option>
                    <option>Price (Low to High)</option>
                    <option>Price (High to Low)</option>
                    <option>Discount (High to Low)</option>
                </select>
            </div>
        </div>
    );
}

export default productsContainerItemsHeader;
