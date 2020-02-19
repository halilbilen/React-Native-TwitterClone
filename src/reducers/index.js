import { combineReducers } from 'redux';
import AuthReducer from './authRecuder';
import TweetFormReducer from './tweetFormReducer';
import TweetListReducer from './tweetListReducer';
export default combineReducers({
    auth: AuthReducer,
    tweetForm: TweetFormReducer,
    tweetList: TweetListReducer
});