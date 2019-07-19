import React, { useContext } from "react";
import AppContext from "../AppContext";
import { TOGGLE_TODO, DELETE_TODO } from "../todosReducer";
import { filterTodos } from "../useFilter";

const buttonStyle = {
  marginLeft: "5px"
};

function TodoListItem({ todo, onChangeTodo, onDeleteTodo }) {
  return (
    <li>
      <label className={todo.done ? "done" : ""}>
        <input checked={todo.done} onChange={onChangeTodo} type="checkbox" />
        {todo.text}
      </label>
      <button style={buttonStyle} onClick={onDeleteTodo}>
        Del
      </button>
    </li>
  );
}

function TodoList() {
  const { todos, todosDispatch, activeFilter } = useContext(AppContext);
  const todosToDisplay = filterTodos(todos, activeFilter);

  return (
    <div>
      {todos[0] ? <p> Showing: {todosToDisplay.length} </p> : null}
      <ul className="todo-list">
        {todosToDisplay.map(todo => (
          <TodoListItem
            key={todo.id}
            onChangeTodo={() =>
              todosDispatch({ type: TOGGLE_TODO, todoIndex: todo.id })
            }
            onDeleteTodo={() =>
              todosDispatch({ type: DELETE_TODO, todoIndex: todo.id })
            }
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
