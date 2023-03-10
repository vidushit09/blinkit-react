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
      cartValue: 0
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
    if(window.localStorage.getItem(productId)){
      obj = JSON.parse(window.localStorage.getItem(productId));
      let count=Number(obj.quantity);
      obj.quantity=count+1;
      let tempCartVal=(Number(this.state.cartValue)+obj.price).toFixed(2);
      this.setState({
        cartCount: this.state.cartCount+1,
        cartValue: tempCartVal
      })
    }
    else{
      const price = Number(parentNode.getElementsByClassName("products-container__discounted-price")[0].innerText.slice(1));
      obj = {
          name: parentNode.parentNode.getElementsByClassName("products-container__item-name")[0].innerText,
          price: price,
          quantity: 1
      }
      let tempCartVal=(Number(this.state.cartValue)+Number(price)).toFixed(2);
      this.setState({
        cartCount: this.state.cartCount+1,
        cartValue: tempCartVal
      })
    }
    
    window.localStorage.setItem(productId, JSON.stringify(obj));
  }

  deleteProduct=(parentNode)=>{
    let productId=parentNode.parentNode.getElementsByClassName("product-id")[0].innerText;
    let obj=JSON.parse(window.localStorage.getItem(productId));
    let count=Number(obj.quantity);
    if(count==1){ 
      window.localStorage.removeItem(productId);
    }
    else{
      obj.quantity=count-1;
      window.localStorage.setItem(productId,JSON.stringify(obj));
    }
    let tempCartVal= (Number(this.state.cartValue)-Number(obj.price)).toFixed(2);
    this.setState({
      cartCount: this.state.cartCount-1,
      cartValue: tempCartVal
    })
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
