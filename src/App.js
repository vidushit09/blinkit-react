import React from 'react';
import "./App.css";
import { Route, Routes } from "react-router";
import TopNavbar from "./components/topNavbar/topNavbar.js";
import CategoriesNavbar from "./components/categoriesNavbar/categoriesNavbar.js";
import ProductsContainer from "./components/productsContainer/productsContainer.js";
import AdvertisementContainer from './components/advertisementContainer/advertisementContainer';
import Disclaimer from "./components/disclaimer/disclaimer";
import Footer from './components/footer/footer';
import Checkout from './components/checkout/checkout.js';

class App extends React.Component {

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
