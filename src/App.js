<<<<<<< HEAD
import React from "react";
import connect from "@vkontakte/vkui-connect";
import { View } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import TestComponent from "./TestComponent";

import Home from "./panels/Home";
import Persik from "./panels/Persik";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: "home",
      fetchedUser: null
    };
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
    return (
      <View activePanel={this.state.activePanel}>
        <Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
        <Persik id="persik" go={this.go} />
      </View>
    );
  }
=======
import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
				<Persik id="persik" go={this.go} />
			</View>
		);
	}
>>>>>>> e489a0324bf25f0d9cc9d0c4b07a4105ec887648
}

export default App;
