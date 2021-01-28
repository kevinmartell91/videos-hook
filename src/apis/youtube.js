import axios from 'axios';

const KEY = 'AIzaSyCUlLPON0LTqz1h8thaI80fzK75D_R1QwE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        key: KEY,
        maxResults: 5        
    }
    // headers: {
    //     Authorization: `Bearer ${KEY}`,
    //     Accept: 'application/json'
    // }
})

