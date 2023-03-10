import React from "react";

class updateButton extends React.Component {
    
    render() {
        let val=0, showDefault=true;

        if(window.localStorage.getItem(this.props.id)){
            val=JSON.parse(window.localStorage.getItem(this.props.id)).quantity;
            showDefault=false;
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

export default updateButton;