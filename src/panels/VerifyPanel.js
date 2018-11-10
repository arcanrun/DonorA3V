import React from "react";

import { Panel, PanelHeader, Avatar, Group, Cell, Button, Div } from "@vkontakte/vkui";

class VerifyPanel extends React.Component {
    render() {
        return (
            <Panel id={this.props.id}>
                <PanelHeader theme="light">
                    <div className="header-logo"></div>
                    <b>DonorSearch</b>
                </PanelHeader>
                <Group title="Подтверждение личности">
                    <Cell before={<Avatar src={this.props.dataUser.photo_100} />}>
                        <b>{this.props.dataUser.first_name}</b>
                    </Cell>
                    <Div>Мы нуждаемся в реальных донорах и хотим чтобы вы подтвердили свои данные.</Div>
                    <Div style={{ display: "flex" }}>
                        <Button
                            size="l"
                            stretched
                            style={{ marginRight: 10 }}
                            onClick={this.props.go.bind(this, "detection-panel")}
                        >Подтверждаю</Button>
                        <Button
                            size="l"
                            stretched
                            level="secondary"
                            onClick={this.props.go.bind(this, "change-panel")}
                        >Изменить</Button>
                    </Div>
                </Group>
            </Panel>
        );
    }
}

export default VerifyPanel;
