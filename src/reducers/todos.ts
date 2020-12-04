import { Todo, AllTodoActions, Types } from '../types';

export const todosReducer = (
  state: Todo[] = [],
  action: AllTodoActions,
): Todo[] => {
  switch (action.type) {
    case Types.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
