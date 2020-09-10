import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import Spinner from 'react-bootstrap/Spinner';

function TodoItem(props) {
  return (
    <ListGroup.Item
      className={classNames({
        'bg-light': props.todo.completed
      })}
    >
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center mr-3">
          <span className="mr-2">{props.todo.name}</span>
          {props.todo.completed ? (
            <CheckCircleRoundedIcon className="text-success" />
          ) : null}
          {props.loadingDeleteTodoId === props.todo.id ? (
            <Spinner animation="grow" variant="danger" />
          ) : null}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Button
            variant="outline-info"
            size="sm"
            className="mr-2"
            onClick={() => props.editTodo(props.todo.id)}
          >
            <EditIcon />
          </Button>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => props.deleteTodo(props.todo.id)}
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
}

const mapStateToProps = state => {
  return {
    loadingDeleteTodoId: state.todo.loadingDeleteTodo
  };
};

export default connect(mapStateToProps)(TodoItem);
