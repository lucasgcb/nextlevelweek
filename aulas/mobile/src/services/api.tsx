import axios from 'axios';
const HOST = "192.168.0.35"
const PORT = "3333"
const api = axios.create({
    baseURL: `http://${HOST}:${PORT}`
})

export default api