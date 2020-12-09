import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, deleteTodo } from '../actions';
import { Todo, StoreState, DeleteTodoAction } from '../types';

interface Props {
  todos: Todo[];
  fetchTodos(): Promise<void>;
  deleteTodo(id: number): DeleteTodoAction;
}

interface State {
  loading: boolean;
}

class _App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  _fetchTodos = async () => {
    const { fetchTodos } = this.props;
    this.setState({ loading: true });
    await fetchTodos();
    this.setState({ loading: false });
  };

  renderList(): ReactNode[] {
    const { deleteTodo } = this.props;
    return this.props.todos.map(({ title, id }) => (
      <div key={id} onClick={() => deleteTodo(id)}>
        {title}
      </div>
    ));
  }

  render(): ReactNode {
    const { loading } = this.state;
    return (
      <div>
        <h1>Todos!</h1>
        <button onClick={this._fetchTodos}>Fetch Todos</button>
        {loading ? 'Loading...' : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos,
});

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
