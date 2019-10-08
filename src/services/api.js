import axios from 'axios';

const api = axios.create({
  baseURL: 'http://processoseletivoneon.azurewebsites.net/',
});

export default api;
