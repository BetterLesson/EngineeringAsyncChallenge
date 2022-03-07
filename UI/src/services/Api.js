import axios from 'axios';

const apiClient = axios.create({ baseURL: '' });

export const getData = async (url) => {
  try {
    const results = await apiClient.get(url);
    return results ? results.data : false;
  } catch (err) {
    console.error(err);
  }
};
