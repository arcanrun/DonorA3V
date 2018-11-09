import React from "react";
import connect from "@vkontakte/vkui-connect";
import "@vkontakte/vkui/dist/vkui.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: "login",
      fetchedUser: null
    };
  }

  pagination(page) {
    this.setState({
      activePanel: page
    });
    console.log(this.state.activePanel);
  }

  componentDidMount() {
    connect.subscribe(e => {
      switch (e.detail.type) {
        case "VKWebAppGetUserInfoResult":
          this.setState({ fetchedUser: e.detail.data });
          break;
        default:
          console.log(e.detail.type);
      }
    });
    connect.send("VKWebAppGetUserInfo", {});
  }

  go = e => {
    this.setState({ activePanel: e.currentTarget.dataset.to });
  };
  render() {
    return <div>HEllo world</div>;
  }
}

export default App;
