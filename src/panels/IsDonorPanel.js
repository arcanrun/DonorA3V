import React from "react";

import { Panel, PanelHeader, Group, Div, CellButton } from "@vkontakte/vkui";

class IsDonorPanel extends React.Component {
    render() {
        return (
            <Panel id={ this.props.id }>
                <PanelHeader theme="light">
                    <div className="header-logo"></div>
                    <b>DonorSearch</b>
                </PanelHeader>
                <Group>
                    <Div style={{ display: "flex" }}>
                        <CellButton onClick={ this.props.go.bind(this, "main-view") }>
                            Я являюсь донором
                        </CellButton>
                        <CellButton onClick={this.props.go.bind(this, "newcard-view")}>
                            Я хочу стать донором
                        </CellButton>
                    </Div>
                </Group>
            </Panel>
        );
    }
}

export default IsDonorPanel;
