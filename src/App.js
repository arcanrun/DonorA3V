import React from "react";

import VKConnect from '@vkontakte/vkui-connect-mock';

import "@vkontakte/vkui/dist/vkui.css";
import "./css/main.css";

import { Root } from "@vkontakte/vkui";

import MainView from "./views/MainView"
import VerifyView from "./views/VerifyView";
import EntranceView from "./views/EnrtranceView";
import NewcardView from "./views/NewcardView";

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
    }

    pagination(page) {
        this.setState({
            activeView: page
        });
    }

    componentWillMount() {
        VKConnect.subscribe(e => {
            switch (e.detail.type) {
                case "VKWebAppGetUserInfoResult":
                    this.setState({ fetchedUser: e.detail.data });
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
            <Root activeView={ this.state.activeView } >
                <EntranceView
                    id="entrance"
                    dataUser={ this.state.fetchedUser }
                    go={ this.changeView }
                />
                <VerifyView
                    id="verify"
                    dataUser={ this.state.fetchedUser }
                    gow={ this.changeView }
                />
                <NewcardView
                    id="newcard-view"
                    dataUser={ this.state.fetchedUser }
                    gow={ this.changeView }
                />
                <MainView
                    id="main-view"
                    dataUser={ this.state.fetchedUser }
                />
            </Root>
        );
    }
}

export default App;
