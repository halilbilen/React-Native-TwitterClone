import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Spinner, Buton } from './common';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, isLoggedIn } from '../actions';

class Login extends Component {

   // componentDidMount() {console.log('Login'); this.props.isLoggedIn();}

    onButtonClicked() {
        const { email, password } = this.props;
        this.props.loginUser(email, password);
    }

    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    render() {
        const { error, loading, fullLoading } = this.props;
        if (fullLoading) {
            <Spinner />
        }
        const errorMessage = error ? (
            <Text style={styles.errorStyle}>{error} </Text>

        ) : null;
        const loginButton = loading ? (
            <Spinner />
        ) : (<Buton color='green' title='Login' onPress={this.onButtonClicked.bind(this)} />);

        return (
            <View style={styles.loginContainer}>
                <View><Input text='E-Mail' inputPlaceHolder='Enter E-Mail'
                    onChangeText={this.onEmailChanged.bind(this)} value={this.props.email} /></View>
                <View><Input text='Password' inputPlaceHolder='Enter Password'
                    onChangeText={this.onPasswordChanged.bind(this)
                    }
                    secureTextEntry
                    value={this.props.password}
                /></View>
                {errorMessage}
                <View style={styles.buttonWrapper}>{loginButton}</View>
            </View>


        );
    }
}
const styles = StyleSheet.create({
    buttonWrapper: {
        borderWidth: 0,
        marginTop: 60,
        height: 30,
        justifyContent: 'center',
    },
    errorStyle:
    {
        fontSize: 20,
        color: 'red',
        paddingTop: 5,
        alignSelf: 'center'
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        backgroundColor: 'skyblue'
    }
})

const mapStateToProps = state => {
    const { email, password, loading, error, fullLoading } = state.auth;
    return {
        email, password, loading, error, fullLoading

    }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, isLoggedIn })(Login);

