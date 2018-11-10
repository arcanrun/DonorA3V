import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import {
  Panel,
  PanelHeader,
  HeaderButton,
  osname,
  IOS,
  Select,
  Button,
  FormLayout,
  Input,
  FormLayoutGroup
} from "@vkontakte/vkui";
import Icon24Back from "@vkontakte/icons/dist/24/back";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";

class RegPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Panel id={this.props.id} theme="white">
        <PanelHeader
          left={
            <HeaderButton onClick={this.props.go.bind(this, "verifypanel")}>
              {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </HeaderButton>
          }
        >
          <span id="logo-icon" />
        </PanelHeader>
        <div align="center">
          <h4 align="center">Ввведите ваши личные данные:</h4>
        </div>

        <FormLayout>
          <Select top="Пол" placeholder="Выберите пол">
            <option value="m">Мужской</option>
            <option value="f">Женский</option>
          </Select>
          <Input type="name" top="Фамилия" placeholder="Иванов" />
          <FormLayoutGroup top="Имя">
            <Input type="name" placeholder="Иван" />
          </FormLayoutGroup>
          <FormLayoutGroup top="Отчество">
            <Input type="name" placeholder="Иванович" />
          </FormLayoutGroup>

          <Input
            type="number"
            top="Мобильный телефон"
            placeholder="+7__ - ____-___"
          />

          <Button align="center">Отправить</Button>
        </FormLayout>
      </Panel>
    );
  }
}

export default RegPanel;
