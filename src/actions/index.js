//const response = await jsonPlaceholder.get('/posts'); //This CANNOT BE USED! WE HAVE TO USE MIDDLEWARE FIRST!!
    //this is because the async and await statements make the return value turn out to be something way different at compile-time. See babeljs.io
    //it will not be an action object like below, but instead the request object. 
    //We cannot remove the async property, as it turns the response into a promise, leading to errors where the component will render before data has arrived.

import jsonPlaceholder from '../apis/JSONPlaceholder'
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
   await dispatch(fetchPosts());

/*    const userIds = _.uniq(_.map(getState().posts, 'userId')) //memoizes only the userId property of the posts, as well as mapping each unique id to an array

   userIds.forEach(id => dispatch(fetchUser(id)));
 */
//alternative way to do the above by using chain
   _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
}

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data})
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data });
};

//Overfetch avoidance with memoize
/*const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: response.data });*/