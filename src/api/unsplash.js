import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID qG5-nQqXfy4NflHcoaSFZGRhXp24_1h3w5JeyXpoUEQ'
    }
});