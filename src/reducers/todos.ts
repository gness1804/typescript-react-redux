import { Todo, AllTodoActions, Types } from '../types';

export const todosReducer = (
  state: Todo[] = [],
  action: AllTodoActions,
): Todo[] => {
  switch (action.type) {
    case Types.fetchTodos:
      return action.payload;
    case Types.deleteTodo:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};
