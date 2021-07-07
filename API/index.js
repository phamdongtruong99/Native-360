import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 12220eda843743944cbaff51e0f3217486487d4473a7df944b39016d3ff49cbc'
    }
});