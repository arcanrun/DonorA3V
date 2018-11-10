import React from "react";
import connect from "@vkontakte/vkui-connect";
import "@vkontakte/vkui/dist/vkui.css";
import { Root, View, Panel } from "@vkontakte/vkui";
import Data3Panel from "./panels/Data3Panel";
import RegPanel from "./panels/RegPanel";

import VerifyView from "./views/VerifyView";
import EntranceView from "./views/EnrtranceView";
import "./css/main.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: "entrance"
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({
      activeView: view
    });
    console.log(this.state.activeView);
  }

  render() {
    return (
      <Root activeView={this.state.activeView}>
        <VerifyView id="verify" />
        <EntranceView id="entrance" go={this.changeView} />
      </Root>
    );
  }
}

export default App;
