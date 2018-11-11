import React from "react";

import { View, Panel, PanelHeader, HeaderButton, osname, IOS, Link, Select, Checkbox, Button,
         FormLayout, Input, Textarea, Div} from '@vkontakte/vkui';

import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

class Data2Panel extends React.Component {
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
                    <Select top="Группа крови" placeholder="Выберите группу крови">
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
                    <Select top="Kell-фактор" placeholder="Выберите Kell-фактор">
                        <option value="1">не знаю</option>
                        <option value="2">отрицательный</option>
                        <option value="3" >положительный</option>
                    </Select>
                    <Checkbox top="Какую кровь вы желаете сдавать" item="one">Цельная кровь</Checkbox>
                    <Checkbox item="two">Тромбоциты</Checkbox>
                    <Checkbox item="three">Плазма</Checkbox>
                    <Checkbox item="four">Эритроциты</Checkbox>
                    <Checkbox item="five">Гранулоциты</Checkbox>
                    <Checkbox item="six">Лейкоциты</Checkbox>
                    <Div style={{ textAlign: "center" }}>
                        Временные и постоянные противопоказания. Для сдачи крови есть
                        <Link href="https://donorsearch.org/requirements"> противопоказания</Link>.
                        Если вы не можете быть донором долгое время, то укажите, когда вы сможете вернуться.
                        Мы напомним вам об этом.
                    </Div>
                    <Input top="Пауза до" type="text" placeholder="xx.xx.xxxx" />
                    <Checkbox item="seven">Я вообще не могу быть донором, останусь другом проекта</Checkbox>
                    <Div style={{ textAlign: "center" }}>
                        Донорство костного мозга.Мы уведомим Вас о возможности пройти
                        типирование в вашем городе, когда у нас будет такая информация.
                        <Link href="https://donorsearch.org/donorstvo-kostnogo-mozga"> Подробнее о типировании</Link>
                    </Div>
                    <Checkbox item="eight">Я согласен пройти тестирование</Checkbox>
                    <Button
                        onClick={ this.props.next.bind(this, "carddata3-panel") }
                        size="xl"
                    >Далее</Button>
                </FormLayout>
            </Panel>
        );
    }
}

export default Data2Panel;
