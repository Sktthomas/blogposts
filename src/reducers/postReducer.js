export default (state = [], action) => { //you may not return undefined as a value of a state, therefore we create a reducer with dummy value first. Or an empty default state value

//normally you use switch cases to order the action types you can meet in the reducer. 
switch (action.type) {
    case 'FETCH_POSTS':
        return action.payload;
    default:
        return state
}
};