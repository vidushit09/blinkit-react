import React from "react";
import DownloadButton from "./downloadButton";

function downloadOptions() {
    return (
        <div className="footer__download-options display-flex">
            <div className="footer__download-app">Download App</div>
            <DownloadButton url="img/appStore.png"/>
            <DownloadButton url="img/playStore.png" />
        </div>

    )
}

export default downloadOptions;