import React from 'react';
import "./App.css";
import data from "./json/data.json";
import TopNavbar from "./components/topNavbar/topNavbar.js";
import CategoriesNavbar from "./components/categoriesNavbar/categoriesNavbar.js";
import ProductsContainer from "./components/productsContainer/productsContainer.js";

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      category: "Vegetables and Fruits",
      currSubCategory:"All",
      cartCount: 0,
      cartValue: 0,
      displayCartDefault: false,
      cart:new Map()
    };
  }
  categoryClick=(event)=>{
    this.setState({
      category: event.target.innerText,
      currSubCategory: "All"  
    });

  }
  getSubCategory=(category)=>{
    return data.leftTabCategories.filter(obj=>obj.category==category);
  }
  subCategoryOnClick=(event)=>{
    this.setState({
        currSubCategory: event.target.innerText
      })
  }
  addProduct=(parentNode)=>{
    console.log(parentNode.parentNode);
    let productId=parentNode.parentNode.getElementsByClassName("product-id")[0].innerText;
    let obj;
    if(this.state.cart.get(productId)){
      obj= this.state.cart.get(productId);
      obj.quantity++;
      let tempCart= this.state.cart;
      tempCart.set(productId,obj);

      this.setState({
        cart: tempCart,
        cartCount: this.state.cartCount+1,
        cartValue: this.state.cartValue+obj.price
      })
    }
    else{
      const price = Number(parentNode.getElementsByClassName("products-container__discounted-price")[0].innerText.slice(1));
      obj = {
          name: parentNode.parentNode.getElementsByClassName("products-container__item-name")[0].innerText,
          price: price,
          quantity: 1
      }
      let tempCart= this.state.cart;
      tempCart.set(productId,obj);
      this.setState({
        cart: tempCart,
        cartCount: this.state.cartCount+1,
        cartValue: this.state.cartValue+obj.price
      })
      console.log(this.state.cartValue,this.state.cartCount,this.state.cart)
    }
    
    window.localStorage.setItem(productId, JSON.stringify(obj));
  }
  render() {
    return (
      <div>
        <TopNavbar cartCount={this.state.cartCount} cartValue={this.state.cartValue} displayCartDefault={this.state.displayCartDefault}/>
        <CategoriesNavbar categories={data.topTabCategoryList} categoryClick={this.categoryClick} />
        <ProductsContainer category={this.state.category} currSubCategory={this.state.currSubCategory} cart={this.state.cart} getSubCategory={this.getSubCategory} subCategoryOnClick={this.subCategoryOnClick} addProduct={this.addProduct}/> 
      </div>
    )
  }
}

export default App;
