import React from "react";
import { connect } from "react-redux";


class updateButton extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showDefault:this.props.displayDefault
        }
    }
    render() {
        let val=0,showDefault=true;
        console.log(this.props.displayDefault);
        if(this.props.displayDefault==false){
            console.log(this.props.cartItems.get(String(this.props.id)).quantity);
            showDefault=false;
            val=this.props.count;

        }

        return (
            <>
                <button id="products-container__item-add--default" className="products-container__item--add-default" onClick={this.props.firstAdd} style={{ display: showDefault ? "block" : "none" }}>ADD</button>
                <div id="products-container__item-add--updated" className="products-container__item--add-updated" style={{ display: showDefault ? "none" : "flex" }}>
                    <i className="fa fa-minus" aria-hidden="true" id="minus-button" onClick={this.props.minusone}></i><div className="count">{val}</div><i className="fa fa-plus" aria-hidden="true" id="plus-button" onClick={this.props.plusone}></i>
                </div>
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
      cartItems: state.cart.cartItems
    };
  };
  


export default connect(mapStateToProps)(updateButton);
