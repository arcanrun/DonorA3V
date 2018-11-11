import React from "react";

import { View } from "@vkontakte/vkui";

import VerifyPanel from "../panels/VerifyPanel";
import DetectionPanel from "../panels/DetectionPanel";
import ChangePanel from "../panels/ChangePanel";
import IsDonorPanel from "../panels/IsDonorPanel";
import Data1Panel from "../panels/Data1Panel";
import Data2Panel from "../panels/Data2Panel";
import Data3Panel from "../panels/Data3Panel";

class VerifyView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePanel: "verify-panel",
            prevPanel: null
        };

        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
    }

    next(panel) {
        this.setState({
            prevPanel: this.state.activePanel,
            activePanel: panel
        });
    }

    back() {
        this.setState({
            activePanel: (this.state.prevPanel != null ? this.state.prevPanel : "verify-panel")
        });
    }

    render() {
        return (
            <View id={ this.props.id } activePanel={ this.state.activePanel }>
                <VerifyPanel
                    id="verify-panel"
                    dataUser={ this.props.dataUser }
                    next={ this.next }
                />
                <ChangePanel
                    id="change-panel"
                    dataUser={ this.props.dataUser }
                    back={ this.back }
                    next={ this.next }
                />
                <DetectionPanel
                    id="detection-panel"
                    pagination={ this.props.pagination }
                    dataUser={ this.props.dataUser }
                />
                <IsDonorPanel
                    id="isdonor-panel"
                    next={ this.next }
                    pagination={ this.props.pagination }
                />
                <Data1Panel
                    id="carddata-panel"
                    back={ this.back }
                    next={ this.next }
                />
                <Data2Panel
                    id="carddata2-panel"
                    back={ this.back }
                    next={ this.next }
                />
                <Data3Panel
                    id="carddata3-panel"
                    back={ this.back }
                    pagination={ this.props.pagination }
                />
            </View>
        );
    }
}

export default VerifyView;
