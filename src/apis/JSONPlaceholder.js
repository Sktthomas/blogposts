//the name of the file comes from the name of the API we are using

import axios from 'axios';

export default axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
})