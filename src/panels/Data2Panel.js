import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import connect from "@vkontakte/vkui-connect";
import { View, Panel, PanelHeader, HeaderButton,osname,IOS,Link,Select,Checkbox,Button,FormLayout,Input,FormLayoutGroup,Textarea,Div} from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

class Data2Panel extends React.Component {
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
      <View id={this.props.id} activePanel="data2-panel">

       
        <Panel id="data2-panel">
         <PanelHeader 
          left={<HeaderButton>{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</HeaderButton>}>LOGO</PanelHeader>
          <div align="center">
          <h4 align="center">Карточка донора:</h4>
          </div>
          <label>Выберите группу крови</label>
          <Select placeholder="Группа крови">
        <option value="1">(O(I)RH+) первая положительная группа крови</option>
        <option value="2">(O(I)RH-) первая отрицательная группа крови</option>
        <option value="3">(A(II)RH+) вторая положительная группа крови</option>
        <option value="4">(A(II)RH-) вторая отрицательная группа крови</option>
        <option value="5">(B(III)RH+) третья положительная группа крови</option>
        <option value="6">(B(III)RH-) третья отрицательная группа крови</option>
        <option value="7">(AB(III)RH+) четвертая положительная группа крови</option>
        <option value="8">(AB(III)RH-) четвертая отрицательная группа крови</option>
        <option value="9">(любая) группа крови</option>
         
      </Select>
          <label>Kell-фактор</label>
          <Select  >
        <option value="1">не знаю</option>
        <option value="2">отрицательный</option>
        <option value="3" >положительный</option>
        
       
      </Select>
      <label>Я готов сдавать</label>
        <Checkbox item="one">Цельная кровь</Checkbox>
        <Checkbox item="two">Тромбоциты</Checkbox>
        <Checkbox item="three">Плазма</Checkbox>
        <Checkbox item="four">Эритроциты</Checkbox>
        <Checkbox item="five">Гранулоциты</Checkbox>
        <Checkbox item="six">Лейкоциты</Checkbox>
        <h4 align= "center">Временные и постоянные противопоказания.Для сдачи крови есть <Link href="https://donorsearch.org/requirements">противопоказания</Link>. Если вы не можете быть донором долгое время, то укажите, когда вы сможете вернуться. Мы напомним вам об этом.</h4>
        <label>Пауза до</label>
        <Input type="name"  placeholder="xx.xx.xxxx" />
        <Checkbox item="seven">Я вообще не могу быть донором, останусь другом проекта</Checkbox>
        <h4 align="center">Донорство костного мозга.Мы уведомим Вас о возможности пройти типирование в вашем городе, когда у нас будет такая информация.<Link href="https://donorsearch.org/donorstvo-kostnogo-mozga"> Подробнее о типировании</Link></h4>
          <label></label>
          <Checkbox item="eight">Я согласен пройти тестирование</Checkbox>
          <Button align="center" align = "center">Далее</Button>

          
                  
          
        </Panel>
      </View>
      );
  }
}

export default Data2Panel;
