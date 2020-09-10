import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodos, deleteTodo } from '../../redux';

import TodoItem from './TodoItem';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';

function TodoList({ todoData, getTodos, deleteTodoLocal }) {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const editTodo = id => {
    console.log('edit id ' + id);
  };

  const deleteTodo = id => {
    deleteTodoLocal(id);
  };

  return (
    <>
      <h2>Todo list</h2>
      {todoData.loadingApi ? (
        <Spinner animation="grow" className="mb-3" />
      ) : todoData.error ? (
        <Alert variant="warning">{todoData.error}</Alert>
      ) : todoData.todos.length > 0 ? (
        <>
          <ListGroup>
            {todoData &&
              todoData.todos &&
              todoData.todos.map((todo, index) => (
                <TodoItem
                  key={index}
                  todo={todo}
                  editTodo={() => editTodo(todo.id)}
                  deleteTodo={() => deleteTodo(todo.id)}
                />
              ))}
          </ListGroup>
          {todoData.loadingAddTodo ? (
            <Spinner animation="grow" variant="primary" className="mb-3" />
          ) : null}
        </>
      ) : (
        <Alert variant="warning">No data!</Alert>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    todoData: state.todo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTodos: () => dispatch(getTodos()),
    deleteTodoLocal: id => dispatch(deleteTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
