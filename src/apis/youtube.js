import axios from 'axios';

const KEY = 'AIzaSyAQEA-wzIAx54TVknKCpdiXia5EG-Ww53k';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
        
    }
});