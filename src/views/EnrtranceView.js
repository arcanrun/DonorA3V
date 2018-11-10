import React from "react";

import { View, Panel, PanelHeader, Button, Div } from "@vkontakte/vkui";

class EntranceView extends React.Component {
    render() {
        return (
            <View id={this.props.id} activePanel="entrancePanel">
                <Panel id="entrancePanel" theme="white">
                    <PanelHeader theme="light">
                        <div className="header-logo"></div>
                        <b>DonorSearch</b>
                    </PanelHeader>
                    <div className="bg-entrance"></div>
                    <Div>
                        <h3 style={{ marginTop: "5px" }}>Добро пожаловать, {this.props.dataUser.first_name}!</h3>
                        <div>
                            Здесь вы молниеносно найдете нужные вам пункты приема доноров крови и
                            сможете планировать свои донации. А еще будете получать оповещения о
                            ближайших к вам мест, где помочь сможете именно вы!
                        </div>
                        <div style={{ marginTop: "15px" }}>
                            Если хотите стать донором, приложение поможет вам решиться на первую донацию и не потерять мотивацию.
                        </div>
                        <Button style={{ marginTop: "15px" }} size="xl" onClick={this.props.go.bind(this, "verify")}>
                            Вперёд!
                        </Button>
                    </Div>

                </Panel>
            </View>
        );
    }
}

export default EntranceView;
