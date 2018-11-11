import React from "react";

//import VKConnect from '@vkontakte/vkui-connect-mock';
import VKConnect from '@vkontakte/vkui-connect';

import "@vkontakte/vkui/dist/vkui.css";
import "./css/main.css";

import { Root } from "@vkontakte/vkui";

import MainView from "./views/MainView"
import VerifyView from "./views/VerifyView";
import EntranceView from "./views/EnrtranceView";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeView: "entrance-view",
            fetchedUser: null
        };

        this.pagination = this.pagination.bind(this);
    }

    pagination(view) {
        this.setState({
            activeView: view
        });
    }

    componentWillMount() {
        VKConnect.subscribe(e => {
            switch (e.detail.type) {
                case "VKWebAppGetUserInfoResult":
                    this.setState({ fetchedUser: e.detail.data });
                    break;
                case "VKWebAppAccessTokenReceived":
                    console.log(e.detail.data);
                    break;
                default:
                    console.log(e.detail);
            }
        });

        VKConnect.send("VKWebAppGetUserInfo", {});
    }

    go = e => {
        this.setState({ activeView: e.currentTarget.dataset.to });
    };

    render() {
        return (
            <Root activeView={ this.state.activeView } >

            </Root>
        );
    }
}

// <EntranceView
//     id="entrance-view"
//     dataUser={ this.state.fetchedUser }
//     pagination={ this.pagination }
// />
// <VerifyView
//     id="verify-view"
//     dataUser={ this.state.fetchedUser }
//     pagination={ this.pagination }
// />
// <MainView
//     id="main-view"
//     dataUser={ this.state.fetchedUser }
//     pagination={ this.pagination }
// />

export default App;
