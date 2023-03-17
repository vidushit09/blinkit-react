import React from "react";
import data from "../../json/data.json";
import UpdateButton from "../productsContainer/updateButton";
function checkoutItem(props){
    let item= data.products.filter(obj=>obj.id==props.index)[0];
    let thumbnail="http://127.0.0.1:3000/"+ item.thumbnail;
    let discount= Number(item.discount);
    let price=Number(item.price);
    let updatedPrice=(price * (1 - 0.01 * discount)).toFixed(2);
    let quantity= item.quantity;
    let name=item.name;

    function firstAdd(event){
        props.addProduct(event.target.parentNode)

     
     }
    function plusone(event){
         props.addProduct(event.target.parentNode.parentNode)
     }
    function minusone(event){
         props.deleteProduct(event.target.parentNode.parentNode)
     }

    
    return(
        <li className="checkout-item">
            <div className="checkout-item__left">
                <div className="product-id" style={{ display: "none" }}>{props.index}</div>
                <div className="checkout-item--img">
                    <img src={thumbnail} />
                </div>
                <div className="item-information">
                    <div className="products-container__item-name">
                        {name}
                    </div>
                    <div className="checkout-container__item-weight">
                        {quantity} kg
                    </div>
                    <div className="checkout-item__price">
                        <div className="products-container__discounted-price">
                            ₹{updatedPrice}
                        </div>
                        <div className="products-container__actual-price">
                            ₹{price}
                        </div>
                    </div>
                </div>

            </div>
            <div className="checkout-item__right">
                <UpdateButton id={props.index} firstAdd={firstAdd} plusone={plusone} minusone={minusone}/>
            </div>
            
            
        </li>
    )
}

export default checkoutItem;