import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";
import data from "../../json/data.json"

const cartState = {
  cartCount: 0,
  cartOriginal: 0,
  cartDiscount: 0,
  cartItems: new Map()
};

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let newData = state.cartItems;
      

      let id = action.payload.id;

      let item = data.products.filter(obj => obj.id == id)[0];

      let price = Number(item["price"]);
      let discount = Number(item["discount"]);
      let discountedPrice = (price * (1 - 0.01 * discount)).toFixed(2);
      if (newData.get(id) == undefined) {
        let obj = {
          name: item["name"],
          original: price,
          discountedPrice: discountedPrice,
          discount: discount,
          quantity: 1,
          thumbnail: item["thumbnail"]
        }
        newData.set(id, obj);
        
      }
      else {
        let obj = newData.get(id);
        obj["quantity"] = Number(obj["quantity"]) + 1;
        newData.set(id, obj);
      }
      console.log(state);
      
      return {
        ...state,
        cartCount: state.cartCount+1,
        cartOriginal: Number(state.cartOriginal)+Number(price),
        cartDiscount: (Number(state.cartDiscount)+Number(discountedPrice)).toFixed(2),
        cartItems: newData
      };
    }

    case REMOVE_FROM_CART: {
      let cartItems = state.cartItems;
      let product = cartItems.get(action.payload.id);
      let originalPrice= product["original"];
      let discountedPrice=product["discountedPrice"];
      let newData;
      if(product["quantity"]==1){
        newData= state.cartItems;
        newData.delete(action.payload.id);
      }
      else{
        newData= state.cartItems;
        let quantity= Number(newData.get(action.payload.id)["quantity"])-1;
        newData.get(action.payload.id)["quantity"]=quantity;
        
      }
      console.log(state);
      return{
        ...state,
        cartCount:state.cartCount-1,
        cartOriginal: (Number(state.cartOriginal)-originalPrice).toFixed(2),
        cartDiscount: (Number(state.cartDiscount)-discountedPrice).toFixed(2),
        cartItems: newData
      }
      
    }

    default:
      return state;
  }
};

export default cartReducer;