import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { Todo, Types } from '../types';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res: AxiosResponse<Todo[]> = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );

    dispatch({
      type: Types.fetchTodos,
      payload: res.data,
    });
  };
};
