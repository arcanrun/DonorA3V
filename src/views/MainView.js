import React from "react";
import { View, Epic, Panel, Tabbar, TabbarItem, PanelHeader } from '@vkontakte/vkui';

import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';
import Icon28Place from '@vkontakte/icons/dist/28/place';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28User from '@vkontakte/icons/dist/28/user';

import MapPanel from "../panels/MapPanel"
import UserPanel from "../panels/UserPanel"

import db from "../db.js"

class MapView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeStory: "map"
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
                        label={ db.data.cities[0].blood_stations.length}
                    ><Icon28Place /></TabbarItem>
                    <TabbarItem
                    onClick={this.onStoryChange}
                        selected={this.state.activeStory === 'search'}
                        data-story="search"
                    ><Icon28Search /></TabbarItem>
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
                <View id="search" activePanel="search">
                    <Panel id="search">
                        <PanelHeader>Поиск</PanelHeader>
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
                    <UserPanel id="account" />
                </View>
            </Epic>
        );
    }
}

export default MapView;
