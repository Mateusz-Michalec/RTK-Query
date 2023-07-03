import React from "react";
import { useState } from "react";
import { useGetTodosQuery } from "../api/apiSlice";

export default function TodoList() {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //addTodo
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button className="submit">
        <i className="bi bi-upload" />
      </button>
    </form>
  );

  let content;
  if (isLoading) content = <p>Loading...</p>;
  else if (isSuccess) content = JSON.stringify(todos);
  else if (isError) content = <p>{error}</p>;

  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
      {content}
    </main>
  );
}