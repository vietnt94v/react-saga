import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddTodo({ dispatch }) {
  const initialTodo = { name: '', completed: false };
  const [newTodo, setNewTodo] = useState(initialTodo);

  const handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setNewTodo(newTodo => ({
      ...newTodo,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo(initialTodo);
  };

  return (
    <>
      <h2>Add todo</h2>
      <Form onSubmit={handleSubmit} className="border rounded bg-light p-3">
        <Form.Group>
          <Form.Label>Todo Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newTodo.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            custom
            name="completed"
            label="Completed"
            type="checkbox"
            id={`checkTodoCompleted`}
            checked={newTodo.completed}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

const mapStateToProps = state => {
  return {
    showSubmitSuccess: state.todo.showSubmitSuccess
  };
};

export default connect(mapStateToProps)(AddTodo);
