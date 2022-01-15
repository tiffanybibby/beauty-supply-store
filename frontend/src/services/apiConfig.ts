import axios from 'axios';



const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
      ? 'https://beauty-supply-api.herokuapp.com/api'
      : 'http://localhost:3001/api'
})


export default api