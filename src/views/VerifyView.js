import React from "react";
import connect from "@vkontakte/vkui-connect";
import "@vkontakte/vkui/dist/vkui.css";
import { View } from "@vkontakte/vkui";

import VerifyPanel from "../panels/VerifyPanel";
import DonorSearchDetectionPanel from "../panels/DonorSearchDetectionPanel";

class VerifyView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePanel: "verifypanel" };

    this.changePanel = this.changePanel.bind(this);
  }
  changePanel(panel) {
    this.setState({
      activePanel: panel
    });
    console.log(panel);
  }
  render() {
    return (
      <View id="{this.props.id}" activePanel={this.state.activePanel}>
        <VerifyPanel id="verifypanel" go={this.changePanel} />
        <DonorSearchDetectionPanel
          id="donorSearchDetection"
          go={this.changePanel}
        />
      </View>
    );
  }
}

export default VerifyView;
