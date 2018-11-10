import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import { View, Panel, PanelHeader, HeaderButton,osname,IOS,Link,Select,Button,FormLayout,Input,FormLayoutGroup,Textarea,Div} from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

class RegPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View id={this.props.id} activePanel="reg-panel">

       
        <Panel id="reg-panel">
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

          <Input type="number" top="Мобильный телефон" placeholder="+7__ - ____-___" />
          
           <Button align="center">Отправить</Button>
         
          
        </FormLayout>
          
          
        </Panel>
      </View>
      );
  }
}

export default RegPanel;
