import React, { useContext, useRef, useState } from "react";
import AppContext from "../AppContext";
import { ADD_TODO } from "../todosReducer";

const style = {
  display: "flex",
  justifyContent: "space-between",
  width: "200px"
};

function Form() {
  const [todos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const lastTodoId = Math.max(...todos.map(todo => todo.id), 0); // compute greatest id of existing todos
  const [todoId, setTodoId] = useState(lastTodoId + 1); // set next todo id
  const [todoText, setTodoText] = useState("");
  const { todosDispatch } = useContext(AppContext);
  const inputField = useRef(null);

  function onInputChange(e) {
    setTodoText(e.target.value);
  }

  function clickHandler(e) {
    e.preventDefault();
    if (todoText.trim().length > 0) {
      todosDispatch({
        type: ADD_TODO,
        todo: {
          text: todoText,
          done: false,
          id: todoId.toString()
        }
      });
      setTodoId(todoId + 1); // increment todo id
      setTodoText(""); // empty todo name input form
      inputField.current.focus();
    }
  }

  return (
    <form style={style}>
      <input
        ref={inputField}
        value={todoText}
        onChange={onInputChange}
        type="text"
      />
      <button onClick={clickHandler} type="submit">
        Add
      </button>
    </form>
  );
}

export default Form;
