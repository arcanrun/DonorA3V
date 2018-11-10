import React from "react";

import { View } from "@vkontakte/vkui";

import VerifyPanel from "../panels/VerifyPanel";
import DetectionPanel from "../panels/DetectionPanel";
import ChangePanel from "../panels/ChangePanel";

class VerifyView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: "verify-panel"
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
            <View id="{this.props.id}" activePanel={this.state.activePanel}>
                <VerifyPanel
                    id="verify-panel"
                    dataUser={this.props.dataUser}
                    go={this.changePanel}
                />
                <DetectionPanel
                    id="detection-panel"
                    dataUser={this.props.dataUser}
                    go={this.changePanel}
                />
                <ChangePanel
                    id="change-panel"
                    dataUser={this.props.dataUser}
                    go={this.changePanel}
                />
            </View>
        );
    }
}

export default VerifyView;
