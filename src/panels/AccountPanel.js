import React from "react";
import { Panel, PanelHeader, Group, Cell, Button, Avatar, Div } from '@vkontakte/vkui';

class AccountPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Panel id={this.props.id}>
                <PanelHeader>
                    Карточка донора
                </PanelHeader>

            </Panel>
        );
    }
}

export default AccountPanel;
