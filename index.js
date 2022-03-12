/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Lobby from './component/lobby/Lobby';

AppRegistry.registerComponent(appName, () => Lobby);
