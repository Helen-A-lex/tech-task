import axios from 'axios';
axios.defaults.baseURL = 'https://64a6a1ad096b3f0fcc802861.mockapi.io';
axios.defaults.params = {
  limit: 3,
};
export const getUserPage = async (page = 1) => {
  try {
    const response = await axios.get(`/users/?page=${page}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// export const getUsers = async () => {
//   try {
//     const response = await axios.get('/users');
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
