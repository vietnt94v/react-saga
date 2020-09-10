import axios from 'axios';

import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE
} from './todoTypes';

// GET TODOS
export const getTodos = () => {
  return dispatch => {
    dispatch(getTodosRequest());
    const apiUrl = 'https://5eb10a10e6828200164a70e7.mockapi.io/todos';
    axios
      .get(apiUrl)
      .then(response => {
        const todos = response.data;
        dispatch(getTodosSuccess(todos));
      })
      .catch(err => {
        dispatch(getTodosFailure(err.message));
      });
  };
};

export const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST
  };
};

export const getTodosSuccess = todos => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos
  };
};

export const getTodosFailure = err => {
  return {
    type: GET_TODOS_FAILURE,
    payload: err
  };
};

// ADD TODO
export const addTodo = todo => {
  return dispatch => {
    dispatch(addTodoRequest());
    const apiUrl = 'http://5e4372bb3dfe6c001421e9e7.mockapi.io/todos';
    axios
      .post(apiUrl, todo)
      .then(response => {
        dispatch(addTodoSuccess(response.data));
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

export const addTodoRequest = () => {
  return {
    type: ADD_TODO_REQUEST
  };
};

export const addTodoSuccess = todo => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: todo
  };
};

export const addTodoFailure = err => {
  return {
    type: ADD_TODO_FAILURE,
    payload: err
  };
};

// DELETE TODO
export const deleteTodo = id => {
  return dispatch => {
    dispatch(deleteTodoRequest(id));
    const apiUrl = 'http://5e4372bb3dfe6c001421e9e7.mockapi.io/todos';
    axios
      .delete(apiUrl + '/' + id)
      .then(response => {
        dispatch(deleteTodoSuccess(response.data));
      })
      .catch(error => {
        dispatch(deleteTodoFailure(error.message));
      });
  };
};

export const deleteTodoRequest = id => {
  return {
    type: DELETE_TODO_REQUEST,
    payload: id
  };
};

export const deleteTodoSuccess = todo => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: todo
  };
};

export const deleteTodoFailure = err => {
  return {
    type: DELETE_TODO_FAILURE,
    payload: err
  };
};
