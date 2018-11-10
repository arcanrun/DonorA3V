import React from "react";
import connect from "@vkontakte/vkui-connect";
import VKConnect from "@vkontakte/vkui-connect-mock";
import "@vkontakte/vkui/dist/vkui.css";
import { Root } from "@vkontakte/vkui";

import VerifyView from "./views/VerifyView";
import EntranceView from "./views/EnrtranceView";
import "./css/main.css";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: "entrance",
      fetchedUser: null
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({
      activeView: view
    });
    console.log(this.state.activeView);
  }

  componentDidMount() {
    VKConnect.subscribe(e => {
      console.log(e);
      switch (e.detail.type) {
        case "VKWebAppGetUserInfoResult":
          this.setState({ fetchedUser: e.detail.data });
          break;
        default:
          console.log(this.state.fetchedUser);
      }
    });

    VKConnect.send("VKWebAppGetUserInfo", {});

    // console.log(this.state.fetchedUser);
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
