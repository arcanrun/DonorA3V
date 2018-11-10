import React from "react";
import VKConnect from '@vkontakte/vkui-connect-mock';
import "@vkontakte/vkui/dist/vkui.css";
import { Root } from '@vkontakte/vkui';
import MainView from "./views/MainView"

import "./css/main.css"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeView: "main-view",
            fetchedUser: null
        };
    }

    pagination(page) {
        this.setState({
            activeView: page
        });
    }

    componentDidMount() {
        VKConnect.subscribe(e => {
            switch (e.detail.type) {
                case "VKWebAppGetUserInfoResult":
                    this.setState({ fetchedUser: e.detail.data });
                    console.log(this.state.fetchedUser);
                    break;
                default:
                    console.log(e.detail.type);
            }
        });

        VKConnect.send("VKWebAppGetUserInfo", {});
    }

    go = e => {
        this.setState({ activeView: e.currentTarget.dataset.to });
    };

    render() {
        return (
            <Root activeView="main-view" >
                <MainView id="main-view" />
            </Root>
        );
    }
}

export default App;
