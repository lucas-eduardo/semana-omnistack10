import axios from 'axios';

const app = axios.create({
    baseURL: 'http://192.168.15.7:3333'
});

export default app;