import React from "react";
import connect from "@vkontakte/vkui-connect";
import VKConnect from "@vkontakte/vkui-connect-mock";

import "@vkontakte/vkui/dist/vkui.css";
import {
  Panel,
  PanelHeader,
  Avatar,
  Group,
  Cell,
  Button,
  Div,
  colors
} from "@vkontakte/vkui";

class VerifyPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fetchedUser: "changeit" };
  }

  componentDidMount() {
    this.setState({ fetchedUser: this.state.fetchedUser });
    console.log(this.state.fetchedUser);
  }

  componentWillMount() {
    VKConnect.subscribe(e => {
      switch (e.detail.type) {
        case "VKWebAppGetUserInfoResult":
          this.setState({ fetchedUser: e.detail.data });
          break;
        default:
      }
    });

    VKConnect.send("VKWebAppGetUserInfo", {});
    // console.log(this.state.test);
  }
  render() {
    // this.setState({ fetchedUser: null });
    // console.log(this.state.fetchedUser);
    // console.log("---" + !this.state.fetchedUser);
    if (!this.state.fetchedUser) {
      return (
        <Panel id={this.props.id}>
          <PanelHeader style={{ backgroundColor: colors.red_light }}>
            <span id="logo-icon" />
          </PanelHeader>
          <Group title="Подтверждение личности">
            <Div>
              К сожалению, мы не смогли вас распознать. Авторизуйтесь, чтобы
              продолжить
            </Div>
            <Div>
              <Div style={{ display: "flex" }}>
                <Button
                  size="l"
                  stretched
                  style={{ marginRight: 8 }}
                  onClick={this.props.go.bind(this, "regPanel")}
                >
                  Авторизоваться
                </Button>
              </Div>
            </Div>
          </Group>
        </Panel>
      );
    }
    const avatar_src = this.state.fetchedUser.photo_200;
    const first_name = this.state.fetchedUser.first_name;

    return (
      <Panel id={this.props.id}>
        <PanelHeader style={{ backgroundColor: colors.red_light }}>
          <span id="logo-icon" />
        </PanelHeader>
        <Group title="Подтверждение личности">
          <Cell before={<Avatar src={avatar_src} />}>{first_name}</Cell>
          <Div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Div>
          <Div>
            <Div style={{ display: "flex" }}>
              <Button
                size="l"
                stretched
                style={{ marginRight: 8 }}
                onClick={this.props.go.bind(this, "donorSearchDetection")}
              >
                Подтверждаю
              </Button>
              <Button
                size="l"
                stretched
                level="secondary"
                onClick={this.props.go.bind(this, "regPanel")}
              >
                Изменить данные
              </Button>
            </Div>
          </Div>
        </Group>
      </Panel>
    );
  }
}

export default VerifyPanel;
