import axios from 'axios';
axios.defaults.baseURL = 'https://64a6a1ad096b3f0fcc802861.mockapi.io';
export const getUsers = async () => {
  const response = await axios.get('/users');
  return response.data;
};
