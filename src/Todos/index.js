import "./style.css";
import { useState } from "react";
import TodoList from "../TodoList";
const Todos = () => {
  const [inputData, setInputData] = useState("");
  const [todosList, setTodosList] = useState([]);

  const onTextHandler = (event) => {
    setInputData(event.target.value);
  };
  const addTodos = (e) => {
    e.preventDefault();
    if (inputData.length > 0) {
      setTodosList((items) => {
        return [...items, inputData];
      });
      setInputData("");
    }
  };

  const deleteData = (id)=>{
    setTodosList((items)=>{
      return items.filter((todoItem,index)=>{
        return index !== id;
      })
    })
  }
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
          value={inputData}
          onChange={onTextHandler}
        />
        <ul className="totos" id="todos">
          {todosList.map((itemData, index) => (
            <TodoList
              itemData={itemData}
              key={index}
              id={index}
              deleteData={deleteData}
            />
          ))}
        </ul>
      </form>
      <small>
        click on todos list then delete todos
      </small>
    </div>
  );
};
export default Todos;
