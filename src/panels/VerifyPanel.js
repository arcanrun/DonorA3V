import React from "react";
import connect from "@vkontakte/vkui-connect";
import "@vkontakte/vkui/dist/vkui.css";
import {
  Panel,
  PanelHeader,
  Avatar,
  View,
  Group,
  Cell,
  Button,
  Div
} from "@vkontakte/vkui";
import logopos from "../css/logpopos";
class VerifyPanel extends React.Component {
  render() {
    return (
      <Panel id={this.props.id}>
        <PanelHeader>
          <div style={logopos} id="logo-icon" />
        </PanelHeader>
        <Group title="Подтверждение личности">
          <Cell
            before={
              <Avatar src="https://pp.userapi.com/c845121/v845121950/63c02/4hP61FL56YM.jpg?ava=1" />
            }
          >
            Тимофей Чаптыков
          </Cell>
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
                onClick={this.props.go.bind(this, "donorSearchDetection")}
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
