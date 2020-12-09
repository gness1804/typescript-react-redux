import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo } from '../actions';
import { Todo, StoreState, DeleteTodoAction } from '../types';

interface Props {
  todos: Todo[];
  fetchTodos(): Promise<void>;
  deleteTodo(id: number): DeleteTodoAction;
}

class _App extends React.Component<Props> {
  renderList(): ReactNode[] {
    const { deleteTodo } = this.props;
    return this.props.todos.map(({ title, id }) => (
      <div key={id} onClick={() => deleteTodo(id)}>
        {title}
      </div>
    ));
  }

  render(): ReactNode {
    const { fetchTodos } = this.props;

    return (
      <div>
        <h1>Todos!</h1>
        <button onClick={fetchTodos}>Fetch Todos</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos,
});

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
