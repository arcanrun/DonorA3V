import React from "react";
import connect from "@vkontakte/vkui-connect";
import "@vkontakte/vkui/dist/vkui.css";
<<<<<<< HEAD
import { Root, View, Panel  } from '@vkontakte/vkui';
import Data1Panel from "./panels/Data1Panel"
import RegPanel from "./panels/RegPanel"


=======
import { Root } from "@vkontakte/vkui";
>>>>>>> master

import VerifyView from "./views/VerifyView";
import "./css/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: "verify-view",
      activePanel: "data1-panel",
      fetchedUser: null
    };
  }

  pagination(page) {
    this.setState({
      activeView: page
    });
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
    this.setState({ activeView: e.currentTarget.dataset.to });
  };

  render() {
    return (
<<<<<<< HEAD
    	<Root activeView="verify-view">
		 	<View id="verify-view" activePanel="data1-panel">
		 		<Data1Panel id="data1-panel" />
		 	</View>
		</Root>
    	);
=======
      <Root activeView="verify">
        <VerifyView id="verify" />
      </Root>
    );
>>>>>>> master
  }
}

export default App;
