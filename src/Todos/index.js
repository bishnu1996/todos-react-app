import "./style.css";
import { useState } from "react";

const initialTodos = [{
  todos: "",
}];

const Todos = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodos = (e) => {
    e.preventDefault();
    console.log(todos);
  };
  //   const [text, setText] = useState("");
  const onTextHandler = (e) => {
    setTodos([{
      ...todos,
      [e.target.name]: e.target.value.trim(),
    }]);
    console.log(e.target.value);
  };

  return (
    <div className="todos-app">
      <h1>Todos</h1>
      <form onSubmit={addTodos}>
        <input
          type="text"
          className="input"
          id="input"
          name="todos"
          placeholder="Enter the todo"
          onChange={onTextHandler}
        />
        <ul className="totos" id="todos">
            {todos.map((item,index)=>(
                 <li key={index}>{item.todos}</li>
            ))}
         
        </ul>
      </form>
      <small>
        left click to toggle completed <br /> right click to delete todo
      </small>
    </div>
  );
};
export default Todos;
