import { combineEpics } from 'redux-observable';

import { searchBarEpics } from './containers/search-bar/epics';
import { geolocalizationEpic } from './containers/geolocation/epics';
import { gifsEpic } from './containers/gif/epics';
import { locationEpics } from './containers/location/epics';

export const rootEpic = combineEpics(
    searchBarEpics,
    geolocalizationEpic,
    gifsEpic,
    locationEpics
);
