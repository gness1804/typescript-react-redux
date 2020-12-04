import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions';
import { Todo, StoreState } from '../types';

interface Props {
  todos: Todo[];
  fetchTodos(): any;
}

class _App extends React.Component<Props> {
  render(): ReactNode {
    const { fetchTodos } = this.props;

    return (
      <div>
        <button onClick={fetchTodos}>Fetch Todos</button>
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos,
});

export const App = connect(mapStateToProps, { fetchTodos })(_App);
