import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const fetchPosts = () => api.get('/auth/posts');

export const fetchPostById = (id: number) => api.get(`/auth/posts/${id}`);

export default api;
