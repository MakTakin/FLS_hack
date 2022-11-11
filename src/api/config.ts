import axios from 'axios';

const CancelToken = axios.CancelToken;
export const source = CancelToken.source();
const instance = axios.create({
  baseURL: '/api',
});

instance.interceptors.request.use(request => {
  return request;
});

instance.interceptors.response.use(response => {
  return response.data;
});

export default instance;
