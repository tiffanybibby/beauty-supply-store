import axios from 'axios';


// const getToken = () => {
//   return new Promise(resolve => {
//       resolve(`Bearer ${localStorage.getItem('token') || null}`)
//   })
// }
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
      ? 'https://beauty-supply-api.herokuapp.com/'
      : 'http://localhost:3001/api'
})



// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token')
//     if (token) {
//       config.headers = {
//         Authorization: token,
//       };
//       return config;
//     }},
//   (error) => {
//       return Promise.reject(error);
//   }
// );

export default api