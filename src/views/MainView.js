import React from "react";
import { View, Epic, Panel, Tabbar, TabbarItem, PanelHeader } from '@vkontakte/vkui';

import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';
import Icon28Place from '@vkontakte/icons/dist/28/place';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28User from '@vkontakte/icons/dist/28/user';

import MapPanel from "../panels/MapPanel"
import AccountPanel from "../panels/AccountPanel"

class MapView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStory: "account"
        };

        this.onStoryChange = this.onStoryChange.bind(this);
    }

    onStoryChange (e) {
        this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    render() {
        return (
            <Epic activeStory={this.state.activeStory} tabbar={
                <Tabbar>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'notifications'}
                        data-story="notifications"
                        label="12"
                    ><Icon28Notifications /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'favorite'}
                        data-story="favorite"
                    ><Icon28Favorite /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'map'}
                        data-story="map"
                        label="5"
                    ><Icon28Place /></TabbarItem>
                    <TabbarItem
                    onClick={this.onStoryChange}
                            selected={this.state.activeStory === 'help'}
                        data-story="help"
                    ><Icon28HelpOutline /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'account'}
                        data-story="account"
                    ><Icon28User /></TabbarItem>
                </Tabbar>
            }>
                <View id="favorite" activePanel="favorite">
                    <Panel id="favorite">
                        <PanelHeader>Избранное</PanelHeader>
                    </Panel>
                </View>
                <View id="help" activePanel="help">
                    <Panel id="help">
                        <PanelHeader>Помощь</PanelHeader>
                    </Panel>
                </View>
                <View id="map" activePanel="map">
                    <MapPanel id="map" />
                </View>
                <View id="notifications" activePanel="notifications">
                    <Panel id="notifications">
                        <PanelHeader>Оповещения</PanelHeader>
                    </Panel>
                </View>
                <View id="account" activePanel="account">
                    <AccountPanel id="account" />
                </View>
            </Epic>
        );
    }
}

export default MapView;
