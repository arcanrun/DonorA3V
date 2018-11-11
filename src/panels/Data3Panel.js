import React from "react";

import { Panel, PanelHeader, HeaderButton, osname, IOS, Button, FormLayout,
         Input} from '@vkontakte/vkui';

import Icon24Back from "@vkontakte/icons/dist/24/back";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";

class Data3Panel extends React.Component {
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
                    Контактные данные
                </PanelHeader>
                <FormLayout>
                    <Input type="number" top="Мобильный телефон" placeholder="+7__-____-___" />
                    <Input top="Электронная почта" type="e-mail" placeholder="E-mail" />
                    <Button
                        onClick={ this.props.pagination.bind(this, "main-view") }
                        size="xl"
                    >Отправить</Button>
                </FormLayout>
            </Panel>
        );
    }
}

export default Data3Panel;
