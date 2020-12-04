import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';
import { Todo, StoreState } from '../types';

interface Props {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<Props> {
  renderList(): ReactNode[] {
    return this.props.todos.map(({ title, id }) => <div key={id}>{title}</div>);
  }

  render(): ReactNode {
    const { fetchTodos } = this.props;

    return (
      <div>
        <h1>Todos!</h1>
        <button onClick={fetchTodos}>Fetch Todos</button>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos,
});

export const App = connect(mapStateToProps, { fetchTodos })(_App);
