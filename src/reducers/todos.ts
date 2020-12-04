import { Todo, FetchTodosAction, Types } from '../types';

export const todosReducer = (
  state: Todo[] = [],
  action: FetchTodosAction,
): Todo[] => {
  switch (action.type) {
    case Types.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
