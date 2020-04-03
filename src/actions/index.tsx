import { FETCH_DATA } from './types';
import axios from 'axios';

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

export const fetchData = (data:any) => {
  return {
    type: FETCH_DATA,
    data
  }
};

export const fetchGithubData = () => {
  return (dispatch:any) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};