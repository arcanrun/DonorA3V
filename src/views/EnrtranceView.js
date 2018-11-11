import React from "react";

import { View, Panel, PanelHeader, Button, Div, Gallery, colors } from "@vkontakte/vkui";

class EntranceView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: "entrance-panel"
        };

        this.next = this.next.bind(this);
    }

    next(panel) {
        this.setState({
            prevPanel: this.state.activePanel,
            activePanel: panel
        });
    }

    render() {
        return (
            <View id={this.props.id} activePanel={ this.state.activePanel }>
                <Panel id="entrance-panel" theme="white">
                    <PanelHeader theme="light">
                        <div className="header-logo"></div>
                        <b>DonorSearch</b>
                    </PanelHeader>
                    <div className="bg-entrance"></div>
                    <Div>
                        <h3 style={{ marginTop: "5px" }}>
                            Добро пожаловать, {this.props.dataUser.first_name}!
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
                        <Button
                            style={{ marginTop: "15px" }}
                            size="xl"
                            onClick={this.next.bind(this, "how-panel")}>
                            Вперёд!
                        </Button>
                    </Div>
                </Panel>
                <Panel id="how-panel" theme="white">
                    <PanelHeader theme="light">
                        <div className="header-logo"></div>
                        <b>Как это работает?</b>
                    </PanelHeader>
                    <Gallery
                        style={{ height: window.innerHeight - 56 }}
                        bullets="dark"
                    >
                        <div style={{ height: window.innerHeight - 56 }}>
                            <div className="how1-image"></div>
                            <Div className="how-text">
                                Сдавайте кровь или компоненты в центрах крови
                            </Div>
                            <Div style={{ display: "flex" }}>
                                <Button
                                    size="xl"
                                    streched
                                    onClick={this.props.pagination.bind(this, "verify-view")}
                                    level="tertiary">Пропустить</Button>
                            </Div>
                        </div>
                        <div style={{ height: window.innerHeight - 56 }}>
                            <div className="how2-image"></div>
                            <Div className="how-text">
                                Фотографируйте полученные справки о своих донациях
                            </Div>
                            <Div style={{ display: "flex" }}>
                                <Button
                                    size="xl"
                                    streched
                                    onClick={this.props.pagination.bind(this, "verify-view")}
                                    level="tertiary">Пропустить</Button>
                            </Div>
                        </div>
                        <div style={{ height: window.innerHeight - 56 }}>
                            <div className="how3-image"></div>
                            <Div className="how-text">
                                Добавляйте фотографии справок в приложении или на сайте donorsearch.org
                            </Div>
                            <Div style={{ display: "flex" }}>
                                <Button
                                    size="xl"
                                    streched
                                    onClick={this.props.pagination.bind(this, "verify-view")}
                                    level="tertiary">Пропустить</Button>
                            </Div>
                        </div>
                        <div style={{ height: window.innerHeight - 56 }}>
                            <div className="how4-image"></div>
                            <Div className="how-text">
                                Получайте награды и развивайте свой донорский профиль
                            </Div>
                            <Div style={{ display: "flex" }}>
                                <Button
                                    size="xl"
                                    streched
                                    onClick={this.props.pagination.bind(this, "verify-view")}
                                    level="commerce">Понятно</Button>
                            </Div>
                        </div>
                    </Gallery>
                </Panel>
            </View>
        );
    }
}

export default EntranceView;
