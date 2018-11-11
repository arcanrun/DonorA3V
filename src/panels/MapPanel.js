import React from "react";

import { Panel, PanelHeader } from '@vkontakte/vkui';
import { YMaps, Map, Clusterer, Placemark, ListBox, ListBoxItem, RouteButton, GeolocationControl } from 'react-yandex-maps';

import 'bootstrap/dist/css/bootstrap.min.css';

import db from "../db.js"

class MapPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            template: null,

            map: {
                apikey: "22e11934-0834-4556-bf39-365c01348ab3",
                center: [59.93863, 30.31413],
                zoom: 10,
                controls: [],
                options: {
                },
                behaviors: ['default', 'scrollZoom'],
                loadOptions: {
                     lang: "ru_RU",
                     suppressMapOpenBlock: true,
                     coordorder: 'latlong',
                     load: 'package.full',
                     //mode: 'release'
                }
            },
        };

        this.mapsOnLoad = ymaps => {
            if (ymaps && !this.state.template) {
            }
        };
    }

    render() {
        const points = db.data.cities[0].blood_stations;

        const getPointOptions = () => {
            return {
              preset: 'islands#redGlyphIcon',
              iconGlyph: 'music',
              iconGlyphColor: 'red'
            };
        };

        const getPointData = (title, worktime) => {
            return {
                clusterCaption: '<strong>' + title + '</strong>',
                balloonContentBody: '<strong>' + title + '</strong>' +
                    '<strong>' + worktime + '</strong>' +
                    '<button type="default" role="button" class="Tappable Tappable--android Button Button--android Button--sz-m Button--lvl-primary Button--aln-center Button--str Tappable--inactive">' +
                    '<span class="Tappable__waves"></span>' +
                    '<div class="Button__in"><div class="Button__content">Записаться</div></div></button>',
            };
        };

        return (
            <Panel id={ this.props.id } theme="white">
                <PanelHeader theme="light">
                    <div className="header-logo"></div>
                    <b>Карта</b>
                </PanelHeader>
                <YMaps>
                    <Map
                        onLoad={ this.mapsOnLoad }
                        state={ this.state.map }
                        width={ window.innerWidth }
                        height={ window.innerHeight}
                    >
                        <ListBox data={{ content: 'Фильтр' }}>
                            <ListBoxItem data={{ content: 'Вне очереди' }} />
                            <ListBoxItem data={{ content: 'Не загружены' }} />
                            <ListBoxItem data={{ content: 'Свободны' }} />
                        </ListBox>
                        <RouteButton options={{ float: 'right' }} />
                        <GeolocationControl options={{ float: 'left' }} />
                        <Clusterer
                            options={{
                                preset: 'islands#invertedRedClusterIcons',
                                groupByCoordinates: false,
                                clusterDisableClickZoom: true,
                                clusterHideIconOnBalloonOpen: false,
                                geoObjectHideIconOnBalloonOpen: false,
                            }}
                        >
                            {points.map((point, i) =>
                                <Placemark
                                    key={ i }
                                    geometry={[point.lat, point.lng]}
                                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                                    properties={ getPointData(point.title, point.worktime) }
                                    options={ getPointOptions() }
                                />
                            )}
                        </Clusterer>
                    </Map>
                </YMaps>
            </Panel>
        );
    }
}

export default MapPanel;
