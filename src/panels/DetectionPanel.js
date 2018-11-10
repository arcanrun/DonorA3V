import React from "react";

import { Panel, PanelHeader, Group, Div, Link,Button } from "@vkontakte/vkui";

class DetectionPanel extends React.Component {
    render() {
        return (
            <Panel id={this.props.id}>
                <PanelHeader theme="light">
                    <div className="header-logo"></div>
                    <b>DonorSearch</b>
                </PanelHeader>
                <Group>
                    <Div>
                        Мы обнаружили ваш профиль на {" "}
                        <Link href="https://donorsearch.org/" target="_blank">
                            нашем официальном сайте
                        </Link>
                    </Div>
                    <Div style={{ display: "flex" }}>
                        <Button
                            size="xl"
                        >Объединить данные</Button>
                    </Div>
                </Group>
            </Panel>
        );
    }
}

export default DetectionPanel;
