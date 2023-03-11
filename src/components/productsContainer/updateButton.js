import React from "react";

class updateButton extends React.Component {
    constructor(props){
        super(props);
        
    }
    render() { 
        return (
            <>
                <button id="products-container__item-add--default" className="products-container__item--add-default" onClick={this.props.firstAdd} style={{ display: this.props.showDefault ? "block" : "none" }}>ADD</button>
                <div id="products-container__item-add--updated" className="products-container__item--add-updated" style={{ display: this.props.showDefault ? "none" : "flex" }}>
                    <i className="fa fa-minus" aria-hidden="true" id="minus-button" onClick={this.props.minusone}></i><div className="count">{this.props.itemCount}</div><i className="fa fa-plus" aria-hidden="true" id="plus-button" onClick={this.props.plusone}></i>
                </div>
            </>

        )
    }
}

export default updateButton;