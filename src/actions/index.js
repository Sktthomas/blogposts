import jsonPlaceholder from '../apis/JSONPlaceholder'

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data})
}

    //const response = await jsonPlaceholder.get('/posts'); //This CANNOT BE USED! WE HAVE TO USE MIDDLEWARE FIRST!!
    //this is because the async and await statements make the return value turn out to be something way different at compile-time. See babeljs.io
    //it will not be an action object like below, but instead the request object. 
    //We cannot remove the async property, as it turns the response into a promise, leading to errors where the component will render before data has arrived.
