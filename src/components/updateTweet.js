import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextArea, Buton } from './common';
import { connect } from 'react-redux';
import { changeTweet, updateTweet, deleteTweet } from '../actions';

class UpdateTweet extends Component {
    onChangeTweet(tweet) {
        this.props.changeTweet(tweet);
    }

    componentDidMount() {
        const { tweet } = this.props.tweet;
        this.props.changeTweet(tweet);
    }

    checkEmail(callback) {
        const { email } = this.props.user;
        const tweetEmail = this.props.tweet.email;
        if (email == tweetEmail) {
            callback();
        }
        else {
            Alert.alert(
                'E-Mail Hatası',
                'Baskasının tweetini düzenleyemezsiniz.',
                [
                    {
                        text: 'OK',
                        style: 'default'
                    }
                ], { cancelable: false }
            );
        }
    }

    updateTweet() {
        this.checkEmail(() => {
            const tweetObj = { ...this.props.tweet, tweet: this.props.tweetForm.tweet }
            this.props.updateTweet(tweetObj);
        })
    }

    deleteTweet() {
        this.checkEmail(() => {
            Alert.alert(
                'Silmekten emin misiniz?',
                'OK basınca tweet silinecektir.',
                [
                    {
                        text: 'OK', onPress: () => {
                            const { uid } = this.props.tweet;
                            this.props.deleteTweet(uid);
                        }, style: 'default'
                    },
                    {
                        text: 'CANCEL', style: 'cancel'
                    }
                ], { cancelable: false }
            );
        })
    }

    render() {
        const { tweetForm } = this.props;
        return (
            <View style={styles.updateContainer}>
                <TextArea placeholder='Tweet Duzenle' value={tweetForm.tweet} onChangeText={this.onChangeTweet.bind(this)} />
                <Buton spinner={false} title='Duzenle ' onPress={this.updateTweet.bind(this)} color='orange' />
                <Buton spinner={false} title='Sil ' onPress={this.deleteTweet.bind(this)} color='red' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    updateContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    }
});

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        tweetForm: state.tweetForm
    }
}

export default connect(mapStateToProps, { changeTweet, updateTweet, deleteTweet })(UpdateTweet);