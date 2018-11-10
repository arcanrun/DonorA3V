import "core-js/es6/map";
import "core-js/es6/set";
import React from "react";
import ReactDOM from "react-dom";
import connect from "@vkontakte/vkui-connect";
import App from "./App";
import registerServiceWorker from "./sw";

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//const token = "AAAAB3NzaC1yc2EAAAABJQAAAQEAtPkMaQZauNepdoI86lauVp950mSrFdWW7cP1PHrNRVjuOmmjdQWF/QJimQL108wiWQD+URC45v6tu6fPILKPVFAofUBwb9YedhlSZllx5oJmdocEXsX670Vob4b6DtAa36lJwwGRLDo83YgjKl01zJaSFDuhG1Y7vYE/QuBX2vdZP+dX2oC6suwVnOoWlkVTun66L/wuxwweRJDnyJrU2qd88Af6x/xy1cdiFRAuiUB7ijcWVWiGfkIvUb+VeSjmrtALz/+y1e/cLSdq62hd/aVDKGkTjih95fXjgbQzlGKzmf2g/HAA0XpeD2dI2ffSwZVViPHpjMSzCZETUxGkcQ== rsa-key-20181110";

const httpLink = {
    uri: 'https://95.213.28.122',
    // headers: {
    //   authorization: `Bearer ${token}`
    // }
};

const client = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache()
});

// Init VK App
connect.send("VKWebAppInit", {});

// Service Worker For Cache
registerServiceWorker();

ReactDOM.render(<ApolloProvider client={client}><App/></ApolloProvider>, document.getElementById('root'));
