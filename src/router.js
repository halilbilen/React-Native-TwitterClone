import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Login from './components/login';
import Tweets from './components/tweets';
import UpdateTweet from './components/updateTweet';
import NewTweet from './components/newTweet';
import firebase from 'firebase';

const RouterComp = () => {
    return (
        <Router >
            <Scene key='root' hideNavBar={true}>
                <Scene key='auth' initial>
                    <Scene key='login'
                        component={Login}
                        title='Login'
                        hideNavBar={true} 
                    />
                </Scene>
                <Scene key='main'>
                    <Scene key='tweets'
                        component={Tweets}
                        title='Tweets'
                        titleStyle={{
                            color: 'red', padding: 120
                        }}
                        leftTitle='Logout'
                        onLeft={() => { firebase.auth().signOut(); }}
                        rightTitle='New'
                        onRight={() => Actions.newTweet()}
                        initial />
                    <Scene key='newTweet'
                        component={NewTweet}
                        title='New Tweet' />
                    <Scene key='updateTweet'
                        component={UpdateTweet}
                        title='Update / Delete Tweet' />
                </Scene>
            </Scene>
        </Router >
    )
}

export default RouterComp;