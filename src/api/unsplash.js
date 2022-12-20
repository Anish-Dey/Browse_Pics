import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
          Authorization:'Client-ID EaClWA8kN3myaGGmyephgZi3tRQHV1w5dDUL65zZGcQ'
        }
})