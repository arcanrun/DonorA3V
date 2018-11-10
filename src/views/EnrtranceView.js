import React from "react";
import connect from "@vkontakte/vkui-connect";
import "@vkontakte/vkui/dist/vkui.css";
import { View, Panel, PanelHeader, Button, Div, Group } from "@vkontakte/vkui";

class EntranceView extends React.Component {
  render() {
    return (
      <View id={this.props.id} activePanel="entrancePanel">
        <Panel id="entrancePanel">
          <PanelHeader>
            <div>
              <span id="logo-icon" />
            </div>
          </PanelHeader>
          <Group>
            <Div style={{ textAlign: "center" }}>
              <b>DonorSearch.org</b>
              <Div>
                <span className="logo-icon" />
              </Div>
            </Div>
            <Div style={{ textAlign: "center" }}>
              <ul style={{ listStyleType: "none", marginLeft: "-40px" }}>
                <li>Мотивируем сдавать кровь</li>
                <li>Большое сообщество доноров</li>
                <li>Поддержка каждого донора с первой донации</li>
                <li>Электронный дневник донаций</li>
              </ul>
            </Div>
            <Div>
              <Button size="xl" onClick={this.props.go.bind(this, "verify")}>
                Продолжить
              </Button>
            </Div>
          </Group>
        </Panel>
      </View>
    );
  }
}

export default EntranceView;
