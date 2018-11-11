import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import connect from "@vkontakte/vkui-connect";
import { View, Panel, PanelHeader, HeaderButton,osname,IOS,Link,Select,Checkbox,Button,FormLayout,Input,FormLayoutGroup,Textarea,Div,Avatar,Group,Cell,List} from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Phone from '@vkontakte/icons/dist/24/phone';
import Icon24Write from '@vkontakte/icons/dist/24/write';
import Icon24Like from '@vkontakte/icons/dist/24/like';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Mention from '@vkontakte/icons/dist/24/mention';
class UserPanel extends React.Component {
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
            <View id={this.props.id} activePanel="user-panel">

       
        <Panel id="user-panel">
         <PanelHeader 
          left={<HeaderButton>{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}</HeaderButton>}>LOGO</PanelHeader>
          <Group title="Личный профиль донора">
        <Cell
          photo="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"
          description="O(I)RH+"
          before={<Avatar src="https://insit.tv/upload/medialibrary/6e8/1759964-darci_krve.jpeg" size={100}/>}
          size="l"
        >
          Иванов Иван
        </Cell>
          </Group>
          <Group title="Связь с донором:" description="">
        <List>
          <Cell>
            Мобильный телефон:
          </Cell>
          <Cell expandable before={<Icon24Phone/>}>8(821)34-51-512
           
          </Cell>
          <Cell expandable before={<Icon24Mention/>}>a3vmustwin@gmail.com
          </Cell>
        </List>
      </Group>
      <Group title="22 донации" description="">
        <List>
          <Cell>
            9<img src="https://developer.donorsearch.org/design_elements/dropplets/full_blood.svg" alt="blood" width="28" height="32"/>13<img src="https://developer.donorsearch.org/design_elements/dropplets/trombocites.svg" alt="blood" width="28" height="32"/>
          </Cell>
          
        </List>
      </Group>
         
        <Group title="Донации донора" description="">
        <List>
          <Cell expandable before={<Icon24Like/>}>ФГБУ «ФНКЦ ДГОИ им. Дмитрия Рогачева»
          </Cell>
          <Cell expandable before={<Icon24Like/>}>Москва
          </Cell>
          <Cell><img src="https://developer.donorsearch.org/design_elements/dropplets/full_blood.svg" alt="blood" width="28" height="32"/>7 донаций 

          </Cell>
          <Cell><img src="https://developer.donorsearch.org/design_elements/dropplets/trombocites.svg" alt="blood" width="28" height="32"/>5 донаций
          </Cell>
        </List>
      </Group>
      <Group title="" description="">
        <List>
          <Cell expandable before={<Icon24Like/>}>Центр крови ФМБА России
          </Cell>
          <Cell expandable before={<Icon24Like/>}>Москва
          </Cell>
          <Cell><img src="https://developer.donorsearch.org/design_elements/dropplets/full_blood.svg" alt="blood" width="28" height="32"/>2 донации 

          </Cell>
          <Cell><img src="https://developer.donorsearch.org/design_elements/dropplets/trombocites.svg" alt="blood" width="28" height="32"/>5 донаций
          </Cell>
        </List>
      </Group>
      <Group title="" description="">
        <List>
          <Cell expandable before={<Icon24Like/>}>НИИ скорой помощи им. Н.В. Склифосовского, отделение трансфузиологии
          </Cell>
          <Cell expandable before={<Icon24Like/>}>Москва
          </Cell>
          <Cell><img src="https://developer.donorsearch.org/design_elements/dropplets/trombocites.svg" alt="blood" width="28" height="32"/>3 донации
          </Cell>
        </List>
      </Group>
          
            
       
          
          
        </Panel>
      </View>
      );
  }
}

export default UserPanel;
