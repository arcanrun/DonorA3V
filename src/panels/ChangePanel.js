import React from "react";

import VKConnect from '@vkontakte/vkui-connect-mock';

import { Panel, PanelHeader, HeaderButton, osname, IOS, Select, Button, FormLayout,
         Input } from "@vkontakte/vkui";

import Icon24Back from "@vkontakte/icons/dist/24/back";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";

class ChangePanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phoneUser: null
        };
    }

    componentWillMount() {
        VKConnect.subscribe(e => {
            switch (e.detail.type) {
                case "VKWebAppGetPhoneNumberResult":
                    this.setState({ phoneUser: e.detail.data.phone_number });
                    break;
                default:
                    console.log(e.detail.type);
            }
        });

        VKConnect.send("VKWebAppGetPhoneNumber", {});
    }

    render() {
        return (
            <Panel id={ this.props.id } theme="white">
                <PanelHeader
                    left={
                        <HeaderButton onClick={ this.props.back.bind(this) }>
                            { osname === IOS ? <Icon28ChevronBack /> : <Icon24Back /> }
                        </HeaderButton>
                    }
                    theme="light"
                >
                    Изменение данных
                </PanelHeader>
                <FormLayout>
                    <Select top="Пол" placeholder="Выберите пол" value={ this.props.dataUser.sex }>
                        <option value="0">Мужской</option>
                        <option value="1">Женский</option>
                    </Select>
                    <Input type="text" top="Фамилия" placeholder="Иванов"
                        defaultValue={ this.props.dataUser.first_name } />
                    <Input type="text" top="Имя" placeholder="Иван"
                        defaultValue={ this.props.dataUser.last_name } />
                    <Input type="text" top="Отчество" placeholder="Иванович" />
                    <Input
                        type="tel"
                        top="Мобильный телефон"
                        placeholder="Введите номер телефона"
                        defaultValue={ this.state.phoneUser }
                    />
                    <Button
                        size="xl"
                        onClick={ this.props.next.bind(this, "isdonor-panel") }
                    >Сохранить</Button>
                </FormLayout>
            </Panel>
        );
    }
}

export default ChangePanel;
