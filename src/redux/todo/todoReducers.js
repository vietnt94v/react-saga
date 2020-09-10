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

const initialState = {
  todos: [],
  loadingApi: false,
  loadingAddTodo: false,
  loadingEditTodo: false,
  loadingDeleteTodo: false,
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // GET TODO
    case GET_TODOS_REQUEST:
      return {
        ...state,
        loadingApi: true
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        loadingApi: false,
        todos: action.payload
      };
    case GET_TODOS_FAILURE:
      return {
        todos: [],
        error: action.payload
      };

    // ADD TODO
    case ADD_TODO_REQUEST:
      return {
        ...state,
        loadingAddTodo: true
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loadingAddTodo: false,
        todos: [...state.todos, action.payload]
      };
    case ADD_TODO_FAILURE:
      return {
        todos: [],
        error: action.payload
      };

    // DELETE TODO
    case DELETE_TODO_REQUEST:
      var idToDelete = action.payload;
      return {
        ...state,
        loadingDeleteTodo: idToDelete
      };
    case DELETE_TODO_SUCCESS:
      var idDelete = action.payload.id;
      var indexDelete = state.todos.findIndex(todo => {
        return todo.id === idDelete;
      });
      state.todos.splice(indexDelete, 1);
      return {
        ...state,
        loadingDeleteTodo: false,
        todos: state.todos
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        showSubmitSuccess: false,
        error: action.payload
      };

    // DEFAULT TODO
    default:
      return state;
  }
};

export default reducer;
