import React from "react";

function downloadButton(props) {
    let path="http://127.0.0.1:3000/"+props.url;
    return (
        <>
            <button className="footer__download-button">
                <img src={path} alt="" />
            </button>
        </>
        
    )
}

export default downloadButton;