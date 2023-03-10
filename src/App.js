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
      displayCartDefault: false
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
  render() {
    return (
      <div>
        <TopNavbar cartCount={this.state.cartCount} cartValue={this.state.cartValue} displayCartDefault={this.state.displayCartDefault}/>
        <CategoriesNavbar categories={data.topTabCategoryList} categoryClick={this.categoryClick} />
        <ProductsContainer category={this.state.category} currSubCategory={this.state.currSubCategory} getSubCategory={this.getSubCategory} subCategoryOnClick={this.subCategoryOnClick}/> 
      </div>
    )
  }
}

export default App;
