import React, { useState } from "react";

function AddTodo() {
  const [todolist, setTodolist] = useState([
    {
      id: 1,
      description: "Get out of bed",
      completed: true,
    },
    {
      id: 2,
      description: "Brush teeth",
      completed: false,
    },
    {
      id: 3,
      description: "Eat breakfast",
      completed: false,
    },
    {
        id: 4,
        description: "Learn React",
        completed: false,
      },
      {
        id: 5,
        description: "Finished Web Development",
        completed: false,
      }
  ]);
  
  function addTodos() {
    setTodolist([
      ...todolist,
      {
        id: todolist[todolist.length - 1]?.id + 1 || 1,
        description: "Added New Task",
        completed: false,
      },
    ]);
  }


  function removeTodo(id) {
    setTodolist(todolist.filter((item) => item.id !== id));
  }

  function handleCheck(id) {
    setTodolist((prev) => {
      const updatedTodos = prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      return updatedTodos;
    });
  }

  return (
    <div>
      <button onClick={addTodos}>Add Todo</button>

      {todolist.length === 0
        ? "No items"
        : todolist.map((item) => (
            <li
              key={item.id}
              style={{
                textDecorationLine: item.completed ? "line-through" : "",
              }}
            >
              {item.description}
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.completed}
              />
              <button onClick={() => removeTodo(item.id)}>Delete</button>
            </li>
          ))}
    </div>
  );
}

export default AddTodo;