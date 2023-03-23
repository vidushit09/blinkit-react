import React from 'react';
import "./App.css";
import data from "./json/data.json";
import { Route, Routes } from "react-router";
import TopNavbar from "./components/topNavbar/topNavbar.js";
import CategoriesNavbar from "./components/categoriesNavbar/categoriesNavbar.js";
import ProductsContainer from "./components/productsContainer/productsContainer.js";
import AdvertisementContainer from './components/advertisementContainer/advertisementContainer';
import Disclaimer from "./components/disclaimer/disclaimer";
import Footer from './components/footer/footer';
import Checkout from './components/checkout/checkout.js';

class App extends React.Component {
  
  constructor(props) {
    super(props);
  //   this.state = {
  //     category: "Vegetables and Fruits",
  //     currSubCategory:"All",
  //     cartCount: 0,
  //     cartOriginal: 0,
  //     cartDiscount: 0
  //   };
  // }
  // categoryClick=(event)=>{
  //   this.setState({
  //     category: event.target.innerText,
  //     currSubCategory: "All"  
  //   });

  // }
  // getSubCategory=(category)=>{
  //   return data.leftTabCategories.filter(obj=>obj.category==category);
  // }
  // subCategoryOnClick=(event)=>{
  //   this.setState({
  //       currSubCategory: event.target.innerText
  //     })
  // }
  // addProduct=(parentNode)=>{
  //   let productId=parentNode.parentNode.getElementsByClassName("product-id")[0].innerText;
  //   let obj;
  //   if(window.localStorage.getItem(productId)){
  //     obj = JSON.parse(window.localStorage.getItem(productId));
  //     let count=Number(obj.quantity);
  //     obj.quantity=count+1;
  //     let tempCartOriginal=(Number(this.state.cartOriginal)+obj.originalPrice).toFixed(2);
  //     let tempCartDiscount=(Number(this.state.cartDiscount)+obj.discountedPrice).toFixed(2);
  //     this.setState({
  //       cartCount: this.state.cartCount+1,
  //       cartOriginal: tempCartOriginal,
  //       cartDiscount: tempCartDiscount
  //     })
  //   }
  //   else{
  //     const discountedPrice = Number(parentNode.getElementsByClassName("products-container__discounted-price")[0].innerText.slice(1));
  //     const originalPrice= Number(parentNode.getElementsByClassName("products-container__actual-price ")[0].innerText.slice(1));
  //     obj = {
  //         name: parentNode.parentNode.getElementsByClassName("products-container__item-name")[0].innerText,
  //         discountedPrice: discountedPrice,
  //         originalPrice: originalPrice,
  //         quantity: 1
  //     }
  //     let tempCartOriginal=(Number(this.state.cartOriginal)+Number(originalPrice)).toFixed(2);
  //     let tempCartDiscount=(Number(this.state.cartDiscount)+Number(discountedPrice)).toFixed(2);
  //     this.setState({
  //       cartCount: this.state.cartCount+1,
  //       cartOriginal: tempCartOriginal,
  //       cartDiscount: tempCartDiscount
  //     })
  //   }
    
  //   window.localStorage.setItem(productId, JSON.stringify(obj));
  // }

  // deleteProduct=(parentNode)=>{
  //   let productId=parentNode.parentNode.getElementsByClassName("product-id")[0].innerText;
  //   let obj=JSON.parse(window.localStorage.getItem(productId));
  //   let count=Number(obj.quantity);
  //   if(count==1){ 
  //     window.localStorage.removeItem(productId);
  //   }
  //   else{
  //     obj.quantity=count-1;
  //     window.localStorage.setItem(productId,JSON.stringify(obj));
  //   }
  //   let tempCartOriginal=(Number(this.state.cartOriginal)-Number(obj.originalPrice)).toFixed(2);
  //   let tempCartDiscount=(Number(this.state.cartDiscount)-Number(obj.discountedPrice)).toFixed(2);
  //   this.setState({
  //     cartCount: this.state.cartCount-1,
  //     cartOriginal: tempCartOriginal,
  //     cartDiscount: tempCartDiscount
  //   })
   }
  render() {
    return (
      <div>
        <TopNavbar/>
         <CategoriesNavbar/>
        <Routes>
          <Route exact path="/" element={
            <ProductsContainer/> } />
          <Route path="/checkout"  element={
            <Checkout/> } />
        </Routes>
        <AdvertisementContainer />
        <Disclaimer />
        <Footer />
      </div>
    )
  }
}

export default App;
