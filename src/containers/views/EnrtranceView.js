import React, {Component} from 'react';
import {push} from 'react-router-redux';
import {connect} from 'react-redux';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24User from '@vkontakte/icons/dist/24/user';
import logo from '../../logo.svg';
import * as vkActions from '../../store/vk/actions';

class EntranceView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEntranceAbout: true
        };
    }

    render() {
        const isProduction = process.env.NODE_ENV === 'production';

        if (!this.props.accessToken) {
            return (
                <UI.Div>
                    <UI.Button
                        before={<Icon24User/>}
                        level='1'
                        size="xl"
                        onClick={this.authorize.bind(this)}
                    >Авторизоваться</UI.Button>
                </UI.Div>
            );
        }

        return (
            <UI.View id={this.props.id}>
                <UI.Panel id="entrance-panel" theme="white">
                    <UI.PanelHeader theme="light">
                        <img className="header-logo" width={96} height={96} src={logo} alt="logo"/>
                        <b>DonorSearch</b>
                    </UI.PanelHeader>
                    {this.renderEntranceContent()}
                </UI.Panel>
            </UI.View>
        );
    }

    renderEntranceContent() {
        if (this.state.isEntranceAbout) {
            const {firstName} = this.props;
            
            return (<div className="bg-entrance" />) && (
                <UI.Div>
                    <h3 style={{ marginTop: "5px" }}>
                        Добро пожаловать, {firstName}!
                    </h3>
                    <div>
                        Здесь вы найдете нужные вам пункты приема доноров крови и
                        сможете планировать свои донации. А еще будете получать оповещения о
                        ближайших к вам мест, где помочь сможете именно вы!
                    </div>
                    <div style={{ marginTop: "15px" }}>
                        Если хотите стать донором, приложение поможет вам решиться на первую
                        донацию и не потерять мотивацию.
                    </div>
                    <UI.Button
                        style={{ marginTop: "15px" }}
                        size="xl"
                        onClick={this.state.isEntranceAbout=false}>
                        Вперёд!
                    </UI.Button>
                </UI.Div>
            );
        }

        return (
            <UI.Gallery
                style={{ height: window.innerHeight - 56 }}
                bullets="dark"
            >
                <div style={{ height: window.innerHeight - 56 }}>
                    <div className="how1-image"></div>
                    <UI.Div className="how-text">
                        Сдавайте кровь или компоненты в центрах крови
                    </UI.Div>
                    <UI.Div style={{ display: "flex" }}>
                        <UI.Button
                            size="xl"
                            streched
                            onClick={this.openNextPage.bind(this)}
                            level="tertiary">Пропустить</UI.Button>
                    </UI.Div>
                </div>
                <div style={{ height: window.innerHeight - 56 }}>
                    <div className="how2-image"></div>
                    <UI.Div className="how-text">
                        Фотографируйте полученные справки о своих донациях
                    </UI.Div>
                    <UI.Div style={{ display: "flex" }}>
                        <UI.Button
                            size="xl"
                            streched
                            onClick={this.openNextPage.bind(this)}
                            level="tertiary">Пропустить</UI.Button>
                    </UI.Div>
                </div>
                <div style={{ height: window.innerHeight - 56 }}>
                    <div className="how3-image"></div>
                    <UI.Div className="how-text">
                        Добавляйте фотографии справок в приложении или на сайте donorsearch.org
                    </UI.Div>
                    <UI.Div style={{ display: "flex" }}>
                        <UI.Button
                            size="xl"
                            streched
                            onClick={this.openNextPage.bind(this)}
                            level="tertiary">Пропустить</UI.Button>
                    </UI.Div>
                </div>
                <div style={{ height: window.innerHeight - 56 }}>
                    <div className="how4-image"></div>
                    <UI.Div className="how-text">
                        Получайте награды и развивайте свой донорский профиль
                    </UI.Div>
                    <UI.Div style={{ display: "flex" }}>
                        <UI.Button
                            size="xl"
                            streched
                            onClick={this.openNextPage.bind(this)}
                            level="commerce">Понятно</UI.Button>
                    </UI.Div>
                </div>
            </UI.Gallery>
        );
    }

    authorize() {
        this.props.dispatch(vkActions.fetchAccessToken());
    }

    openNextPage() {
        this.props.dispatch(push('/verify'));
    }
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(EntranceView);
