import React from "react";

import { Panel, PanelHeader, HeaderButton, osname, IOS, Select, Button, FormLayout, Input,
         Textarea } from '@vkontakte/vkui';

import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

class Data1Panel extends React.Component {
    render() {
        return (
            <Panel id={ this.props.id } theme="white">
                <PanelHeader
                    left={
                        <HeaderButton
                            onClick={ this.props.back.bind(this) }
                        >
                            { osname === IOS ? <Icon28ChevronBack /> : <Icon24Back /> }
                        </HeaderButton>
                    }
                    theme="light"
                >
                    Карточка донора
                </PanelHeader>
                <FormLayout>
                    <Select top="Пол" placeholder="Выберите пол">
                        <option value="0">Мужской</option>
                        <option value="1">Женский</option>
                    </Select>
                    <Input type="text" top="Фамилия" placeholder="Иванов" />
                    <Input type="text" top="Имя" placeholder="Иван" />
                    <Input type="text" top="Отчество" placeholder="Иванович" />
                    <Input type="text" top="Дата рождения" placeholder="хх.хх.хххх" />
                    <Input type="text" top="Город" placeholder="" />
                    <Textarea top="О себе" placeholder="" />
                    <Button size="xl">Далее</Button>
                </FormLayout>
            </Panel>
        );
    }
}

export default Data1Panel;
