export type AllTodoActions = DeleteTodoAction | FetchTodosAction;

export interface DeleteTodoAction {
  type: Types.deleteTodo;
  payload: number; // the id of the todo to delete
}

export interface FetchTodosAction {
  type: Types.fetchTodos;
  payload: Todo[];
}

export interface StoreState {
  todos: Todo[];
}

export interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

export enum Types {
  fetchTodos,
  deleteTodo,
}
