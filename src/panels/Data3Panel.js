import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import connect from "@vkontakte/vkui-connect";
import {
  View,
  Panel,
  PanelHeader,
  HeaderButton,
  osname,
  IOS,
  Button,
  FormLayout,
  Input,
  FormLayoutGroup
} from "@vkontakte/vkui";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";

class Data3Panel extends React.Component {
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
    return (
      <View id={this.props.id} activePanel="data3-panel">
        <Panel id="data3-panel">
          <PanelHeader
            left={
              <HeaderButton>
                {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
              </HeaderButton>
            }
          >
            LOGO
          </PanelHeader>
          <div align="center">
            <h4 align="center">Ввведите ваши контактные данные:</h4>
          </div>

          <FormLayout>
            <Input type="number" top="Телефон" placeholder="+7__-____-___" />
            <FormLayoutGroup top="E-mail">
              <Input type="e-mail" placeholder="e-mail" />
            </FormLayoutGroup>

            <Button align="center">Отправить</Button>
          </FormLayout>
        </Panel>
      </View>
    );
  }
}

export default Data3Panel;
