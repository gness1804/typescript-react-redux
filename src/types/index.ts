export interface Todo {
  userId: number;
  id: number;
  title: string;
  complete: boolean;
}

export enum Types {
  fetchTodos = 'FETCH_TODOS',
}
