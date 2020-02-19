import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextArea, Buton } from './common';
import { connect } from 'react-redux';
import { changeTweet, sendTweet } from '../actions';
class NewTweet extends Component {
    onChangeTweet(tweet) {
        this.props.changeTweet(tweet);
    }
    sendTweet() {
        this.props.sendTweet(this.props.tweet);
    }

    render() {
        return (
            <View style={styles.newTweetContainer}>
                <TextArea placeholder='Tweet yaz' onChangeText={this.onChangeTweet.bind(this)} />
                <Buton spinner={false} title='Tweet At- ' onPress={this.sendTweet.bind(this)} color='orange' />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    newTweetContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 15
    }
});

const mapStateToProps = state => {
    const { tweet } = state.tweetForm;
    return {
        tweet

    }
}
export default connect(mapStateToProps, { changeTweet, sendTweet })(NewTweet);