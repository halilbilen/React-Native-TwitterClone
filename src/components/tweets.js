import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchTweet, isLoggedIn } from '../actions';
import { Card } from './common';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

class Tweets extends Component {
    componentDidMount() {
        //if (this.props.isLoggedIn()) {}
        this.props.fetchTweet();
    }

    renderItem({ item }) {
        return (
            <TouchableOpacity key={item.uid}
                onPress={() => Actions.updateTweet({ tweet: item })}>
                <Card>
                    <Text style={styles.tweetStyle}>{item.tweet}</Text>
                    <Text style={styles.emailStyle}>{item.email}</Text>
                </Card>
            </TouchableOpacity>
        )
    }
    render() {
        const { tweetList } = this.props;
        return (
            <View style={styles.tweetListContainer}>
                <FlatList data={tweetList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.uid} />
            </View>
        )
    }
}
const mapStateToProps = state => {
    const tweetList = _.map(state.tweetList, (val, uid) => {
        return { ...val, uid }
    });
    return { tweetList }
}

const styles = StyleSheet.create({
    tweetListContainer: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10

    },
    tweetStyle: {
        color: 'purple',
        fontSize: 20,
        paddingTop: 5

    },
    emailStyle: {
        color: 'black',
        fontSize: 10,
        alignSelf: 'flex-end',
        paddingRight: 4
    }

})

export default connect(mapStateToProps, { fetchTweet, isLoggedIn })(Tweets);