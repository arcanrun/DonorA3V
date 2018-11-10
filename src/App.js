import React from "react";

import VKConnect from '@vkontakte/vkui-connect-mock';

import "@vkontakte/vkui/dist/vkui.css";
import "./css/main.css";

import { Root, View, Panel } from "@vkontakte/vkui";

import MainView from "./views/MainView"
import Data3Panel from "./panels/Data3Panel";
import RegPanel from "./panels/RegPanel";
import VerifyView from "./views/VerifyView";
import EntranceView from "./views/EnrtranceView";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeView: "entrance",
            fetchedUser: null
        };

        this.changeView = this.changeView.bind(this);
    }

    changeView(view) {
        this.setState({
            activeView: view
        });

        console.log(this.state.activeView);
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
            <Root activeView={this.state.activeView} >
                <VerifyView id="verify" />
                <EntranceView id="entrance" go={this.changeView} />
                <MainView id="main-view" />
            </Root>
        );
    }
}

export default App;
