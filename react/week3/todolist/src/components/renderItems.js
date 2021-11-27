import {useState, useEffect} from "react";
import PropTypes from "prop-types";
import TodoList from "./Todolist";

function RenderTodos() {
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [todos, setTodos] = useState([]);
     // fetching the data from api
    const API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
    useEffect(() => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
          setTodos(data);
        });
    }, []);
    //Add to the todos
    const addTodos = (event) => {
      event.preventDefault();
      if (description !== "") {
        const newTodos = {
          id: todos.length + 1,
          description: description,
          deadline: deadline,
        };
        setDescription("");
        setDeadline("");
        setTodos([...todos, newTodos]);
      }
    };
  
    //delete Todos
    function removeTodo(id) {
      const nextTodos = todos.filter((todo) => todo.id !== id);
      console.log(nextTodos);
      setTodos(nextTodos);
    }
    return (
      <>
        <form onSubmit={addTodos} className="inputfields">
          <div className="form">
            <label htmlFor="tododescription">Description : </label>
            <input
              type="text"
              placeholder="Enter description"
              value={description}
              onChange={(event) => {
                const value = event.target.value;
                setDescription(value);
              }}
            /><br/>
            <label htmlFor="deadline">Deadline : </label>
            <input
              type="date"
              value={deadline}
              onChange={(event) => {
              const value = event.target.value;
              setDeadline(value);
              }}
            /><br/>
             <button type="submit" className="addbutton">
            AddTodo
          </button>
          </div>
        </form>
        {todos.length ? (
          todos.map((todo) => (
            <TodoList
              key={todo.id}
              id={todo.id}
              description={todo.description}
              deadline={todo.deadline}
              removeTodo={removeTodo}
            />
          ))
        ) : (
          <h2 className="no-items">List is Empty</h2>
        )}
      </>
    );
  }
  TodoList.PropTypes = {
    description: PropTypes.string,
    id: PropTypes.number,
    deadline: PropTypes.string,
    removeTodo: PropTypes.func,
  };
  export default RenderTodos;