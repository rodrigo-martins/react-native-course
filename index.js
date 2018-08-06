import React from 'react'
import { AppRegistry} from 'react-native'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './src/store/configureStore'

const store = configureStore()

const RNRedux = () => (
    <Proveder store={store}>
        <App />
    </Proveder>
)

AppRegistry.registerComponent('reactnativecourse', () => RNRedux);
