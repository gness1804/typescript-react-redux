export interface Todo {
  id: number;
  title: string;
  complete: boolean;
}

export enum Types {
  fetchTodos,
}
