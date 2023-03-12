import React from 'react';
import "./App.css";
import data from "./json/data.json";
import TopNavbar from "./components/topNavbar/topNavbar.js";
import CategoriesNavbar from "./components/categoriesNavbar/categoriesNavbar.js";
import ProductsContainer from "./components/productsContainer/productsContainer.js";
import AdvertisementContainer from './components/advertisementContainer/advertisementContainer';
import Disclaimer from "./components/disclaimer/disclaimer";
import Footer from './components/footer/footer';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      category: "Vegetables and Fruits",
      currSubCategory:"All",
      cartCount: 0,
      cartValue: 0,
      cart: new Map()
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
    let productId=parentNode.parentNode.getElementsByClassName("product-id")[0].innerText;
    let obj;
    if(this.state.cart.get(productId)){
      obj = this.state.cart.get(productId);
      let count=Number(obj.quantity);
      obj.quantity=count+1;
      let tempCart=this.state.cart;
      tempCart.set(productId,obj);
      console.log(tempCart)
      let tempCartVal=(Number(this.state.cartValue)+obj.price).toFixed(2);
      this.setState({
        cartCount: this.state.cartCount+1,
        cartValue: tempCartVal,
        cart: tempCart
      })
    }
    else{
      console.log("jhs");
      const price = Number(parentNode.getElementsByClassName("products-container__discounted-price")[0].innerText.slice(1));
      obj = {
          name: parentNode.parentNode.getElementsByClassName("products-container__item-name")[0].innerText,
          price: price,
          quantity: 1
      }
      let tempCart=this.state.cart;

      tempCart.set(productId,obj);
      console.log(tempCart)
      let tempCartVal=(Number(this.state.cartValue)+Number(price)).toFixed(2);
      this.setState({
        cartCount: this.state.cartCount+1,
        cartValue: tempCartVal,
        cart: tempCart
      })
    }
  }

  deleteProduct=(parentNode)=>{
    let productId=parentNode.parentNode.getElementsByClassName("product-id")[0].innerText;
    let obj=this.state.cart.get(productId);
    let count=Number(obj.quantity);
    console.log("hgvjk",count);
    let tempCart;
    if(count==1){ 
      tempCart=this.state.cart;
      tempCart.delete(productId);
    }
    else{
      tempCart=this.state.cart;
      obj.quantity=count-1;
      tempCart.set(productId,obj)
    }
    let tempCartVal= (Number(this.state.cartValue)-Number(obj.price)).toFixed(2);
    this.setState({
      cartCount: this.state.cartCount-1,
      cartValue: tempCartVal,
      cart: tempCart
    })
    console.log(this.state.cart);
  }
  render() {
    return (
      <div>
        <TopNavbar cartCount={this.state.cartCount} cartValue={this.state.cartValue}/>
        <CategoriesNavbar categories={data.topTabCategoryList} categoryClick={this.categoryClick} />
        <ProductsContainer category={this.state.category} currSubCategory={this.state.currSubCategory} cart={this.state.cart} getSubCategory={this.getSubCategory} subCategoryOnClick={this.subCategoryOnClick} addProduct={this.addProduct} deleteProduct={this.deleteProduct}/> 
        <AdvertisementContainer />
        <Disclaimer />
        <Footer />
      </div>
    )
  }
}

export default App;
