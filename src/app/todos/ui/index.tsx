'use client';
import React from "react";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList";

const TodosCompIndex = () => {
  return (
    <>
      <div className="m-auto p-5">
        <TodosList />
        <AddTodo />
      </div>
    </>
  );
};

export default TodosCompIndex;
