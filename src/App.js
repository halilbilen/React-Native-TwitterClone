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
            apiKey: "AIzaSyDEKaG0nxBxRofujlEGWi07gVVQer6P3yI",
            authDomain: "faketwitter-e48b4.firebaseapp.com",
            databaseURL: "https://faketwitter-e48b4.firebaseio.com",
            projectId: "faketwitter-e48b4",
            storageBucket: "",
            messagingSenderId: "814298250597",
            appId: "1:814298250597:web:c0840a99201dfd3e"
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


