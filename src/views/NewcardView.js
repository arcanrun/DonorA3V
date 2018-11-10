import React from "react";

import { View, Panel, PanelHeader } from "@vkontakte/vkui";

class NewcardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: "card-panel",
        };

        this.changePanel = this.changePanel.bind(this);
    }

    changePanel(panel) {
        this.setState({
            activePanel: panel
        });
    }

    render() {
        return (
            <View id={ this.props.id } activePanel={ this.state.activePanel }>
                <Panel id="card-panel" theme="white">
                    <PanelHeader theme="light">
                        <div className="header-logo"></div>
                        <b>Новая карточка</b>
                    </PanelHeader>
                </Panel>
            </View>
        );
    }
}

export default NewcardView;
