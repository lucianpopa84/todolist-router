import React, { useReducer, useEffect } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import TodoList from "./components/TodoList";
import AppContext from "./AppContext";
import todosReducer from "./todosReducer";
import { ALL } from "./useFilter";

import "./App.css";

function App({ match }) {
  const [todos, todosDispatch] = useReducer(
    todosReducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const activeFilter = match.params.filter || ALL;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <AppContext.Provider value={{ todos, todosDispatch, activeFilter }}>
      <div className="todo-app">
        <Form />
        <Filter />
        <TodoList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
