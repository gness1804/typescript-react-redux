import axios from 'axios';
import { Dispatch } from 'redux';
import { Todo, Types, FetchTodosAction, DeleteTodoAction } from '../types';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos',
    );

    dispatch<FetchTodosAction>({
      type: Types.fetchTodos,
      payload: res.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: Types.deleteTodo,
  payload: id,
});
