import React from "react";
import Copyright from "./copyright";
import DownloadOptions from "./downloadOptions";

function footer() {
    return (
        <div className="footer display-flex">
            <div className="footer__left display-flex">
                <Copyright />
                <DownloadOptions />
            </div>
            <div className="footer__right">
                <button className="footer__facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                </button>
                <button className="footer__twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </button>
                <button className="footer__instagram">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </button>
                <button className="footer__linkedin">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </button>
            </div>
        </div>

    )
}

export default footer;