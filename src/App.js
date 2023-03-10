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
    }) 
   // console.log(this.state.category)

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
    console.log(this.state.category, this.state.currSubCategory)
    return (
      <div>
        <TopNavbar cartCount={this.state.cartCount} cartValue={this.state.cartValue} displayCartDefault={this.state.displayCartDefault}/>
        <CategoriesNavbar categories={data.topTabCategoryList} categoryClick={this.categoryClick} />
        <ProductsContainer category={this.state.category} getSubCategory={this.getSubCategory} currSubCategory={this.state.currSubCategory} subCategoryOnClick={this.subCategoryOnClick}/> 
      </div>
    );


  }
}

export default App;
