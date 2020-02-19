import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './router';


export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "xxx",
            authDomain: "yyyy",
            databaseURL: "zzz",
            projectId: "xxx",
            storageBucket: "",
            messagingSenderId: "xxxx",
            appId: "ssss"
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}


