import React from "react";

import { Panel, PanelHeader, Group, Div, Link } from "@vkontakte/vkui";

class IsDonorPanel extends React.Component {
    render() {
        return (
            <Panel id={ this.props.id }>
                <PanelHeader theme="light">
                    <div className="header-logo"></div>
                    <b>DonorSearch</b>
                </PanelHeader>
                <Group style={{ display: "flex" }}>
                    <Link onClick={ this.props.next.bind(this, "carddata-panel") }>
                        <Div><span className="iwdonor-image" /></Div>
                        <Div style={{ textAlign: "center" }}><b>Хотите стать донором?</b></Div>
                        <Div style={{ textAlign: "center", color: "gray" }}>
                            Итак, вы решили стать донором. С DonorSearch решиться на первую
                            донацию проще, чем кажется!
                        </Div>
                    </Link>
                </Group>
                <Group style={{ display: "flex" }}>
                    <Link onClick={ this.props.pagination.bind(this, "main-view") }>
                        <Div><span className="imdonor-image" /></Div>
                        <Div style={{ textAlign: "center" }}><b>Уже сдаете кровь?</b></Div>
                        <Div style={{ textAlign: "center", color: "gray"  }}>
                            DonorSearch поможет разобраться с планированием,
                            копить донации и не терять мотивацию.
                        </Div>
                    </Link>
                </Group>
            </Panel>
        );
    }
}

export default IsDonorPanel;
