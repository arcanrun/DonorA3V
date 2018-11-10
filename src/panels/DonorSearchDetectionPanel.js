import React, { Component } from "react";
import connect from "@vkontakte/vkui-connect";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import "@vkontakte/vkui/dist/vkui.css";
import {
  Panel,
  PanelHeader,
  HeaderButton,
  platform,
  IOS,
  Group,
  Div,
  Link,
  Button
} from "@vkontakte/vkui";
import logopos from "../css/logpopos";
class DonorSearchDetectionPanel extends Component {
  render() {
    const osname = platform();
    // const previuosPanel = this.props.previuosPanel;
    return (
      <Panel id={this.props.id}>
        <PanelHeader
          left={
            <HeaderButton onClick={this.props.go.bind(this, "verifypanel")}>
              {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </HeaderButton>
          }
        >
          <span id="logo-icon" />
        </PanelHeader>
        <Group>
          <Div>
            Мы обнаружили ваш профиль на{" "}
            <Link href="https://donorsearch.org/" target="_blank">
              donorsearch
            </Link>
          </Div>
          <Div style={{ display: "flex" }}>
            <Button stretched>Продолжить</Button>
          </Div>
        </Group>
      </Panel>
    );
  }
}

export default DonorSearchDetectionPanel;
