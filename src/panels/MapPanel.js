import React from "react";

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { YMaps, Map } from 'react-yandex-maps';
import { Panel, PanelHeader } from '@vkontakte/vkui';

class MapPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            map: {
                apikey: "22e11934-0834-4556-bf39-365c01348ab3",
                center: [55.754734, 37.583314],
                zoom: 10,
                controls: [],
                loadOptions: {
                    lang: "ru_RU",
                    coordorder: 'latlong',
                    load: 'package.full',
                    mode: 'release'
                }
            },
        };
    }

    render() {
        console.log(this.props)

        return (
            <Panel id={this.props.id}>
                <PanelHeader>
                    Донорская карта
                </PanelHeader>
                <YMaps>
                    <Map
                        state={this.state.map}
                        width={window.innerWidth}
                        height={window.innerHeight}
                    >
                    </Map>
                </YMaps>
            </Panel>
        );
    }
}

const repoQuery = gql`
    query {
        blood_stations {
           	title
         }
    }
`

const MapPanelWithData = graphql(repoQuery, {})(MapPanel)

export default MapPanelWithData;
