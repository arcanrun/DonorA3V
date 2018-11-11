import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {isWebView} from '@vkontakte/vkui/src/lib/webview';
import * as vkSelectors from '../store/vk/reducer';
import * as vkActions from '../store/vk/actions';
import "../css/main.css";
import EntranceView from "./views/EnrtranceView";
import VerifyView from "./views/VerifyView";
import MainView from "./views/MainView"

class App extends Component {

    componentWillMount() {
        this.props.dispatch(vkActions.initApp());
        this.props.dispatch(vkActions.fetchAccessToken());
        this.props.dispatch(vkActions.userData());
    }

    render() {
        // Если уже входили в приложение
        let activeView = this.props.insets ? 'main' : 'entrance';

        return (
            <UI.ConfigProvider insets={this.props.insets} isWebView={isWebView}>
                <UI.Root activeView={activeView}>
                    <EntranceView id="entrance" firstName={this.props.userData.first_name}/>
                    <VerifyView id="verify" accessToken={this.props.accessToken}/>
                    <MainView id="main" accessToken={this.props.accessToken}/>
                </UI.Root>
            </UI.ConfigProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        accessToken: vkSelectors.getAccessToken(state),
        userData: vkSelectors.getUserData(state),
        insets: vkSelectors.getInsets(state),
    };
}

export default connect(mapStateToProps)(App);