import {combineReducers } from 'redux';
import postsReducer from './postReducer'

//we create our reducers in other files, then import them into the combineReducers file here
export default combineReducers({
    posts: postsReducer
});