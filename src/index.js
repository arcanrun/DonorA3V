import "core-js/es6/map";
import "core-js/es6/set";
import React from "react";
import ReactDOM from "react-dom";
import connect from "@vkontakte/vkui-connect";
import App from "./App";
import registerServiceWorker from "./sw";

connect.subscribe(e => {
    switch (e.detail.type) {
        case "VKWebAppInitResult":
            console.log(e.detail);
            break;
        case "VKWebAppAccessTokenReceived":
            console.log(e.detail);
            break;
        default:
            console.log(e.detail);
    }
});

// Init VK App
connect.send("VKWebAppInit", {});
connect.send("VKWebAppGetAuthToken", {"app_id": 6746932, "scope": "notify,email"});

// Service Worker For Cache
registerServiceWorker();

ReactDOM.render(<App/>, document.getElementById('root'));
