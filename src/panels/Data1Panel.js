import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import connect from "@vkontakte/vkui-connect";
import { View, Panel, PanelHeader, HeaderButton,osname,IOS,Link,Select,Button,FormLayout,Input,FormLayoutGroup,Textarea,Div} from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

class Data1Panel extends React.Component {
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
      <View id={this.props.id} activePanel="data1-panel">

       
        <Panel id="data1-panel">
         <PanelHeader 
          left={<HeaderButton>{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</HeaderButton>}>LOGO</PanelHeader>
          <div align="center">
          <h4 align="center">Ввведите ваши личные данные:</h4>
          </div>
          <Select top="Пол" placeholder="Выберите пол">
        <option value="m">Мужской</option>
        <option value="f">Женский</option>
      </Select>


              <FormLayout>
          <Input type="name" top="Фамилия" placeholder="Иванов" />
          <FormLayoutGroup top="Имя" >
            <Input type="name"  placeholder="Иван" />
          </FormLayoutGroup>
            <FormLayoutGroup top="Отчество" >
            <Input type="name"  placeholder="Иванович" />
          </FormLayoutGroup>
          <Input type="name" top="Дата рождения" placeholder="хх.хх.хххх" />
          <Input type="name" top="Город" placeholder="" />
          <Textarea top="О себе" placeholder="" />
          
           <Button align="center">Далее</Button>
         
          
        </FormLayout>
          
          
        </Panel>
      </View>
      );
  }
}

export default Data1Panel;
