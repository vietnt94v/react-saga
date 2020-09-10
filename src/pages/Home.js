import React from 'react';
import TodoList from '../containers/Todo/TodoList';
import AddTodo from '../containers/Todo/AddTodo';

export default function Home() {
  return (
    <div className="container">
      <div className="pt-5"></div>
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-4 mb-lg-0">
            <TodoList />
          </div>
        </div>
        <div className="col-lg-6">
          <AddTodo />
        </div>
      </div>
    </div>
  );
}
