import { useState } from "react";
import "./To-do-list.css";
export const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState();
  const todosHandler = () => {
    const newTodo = {};
    if (todoText) {
      newTodo.id = todos.length + 1;
      newTodo.text = todoText;
    }
    setTodos([...todos, newTodo]);
    setTodoText("");
  };
  const updateTodoHandler = (id) => {
    const index = todos.findIndex((item) => item.id === id);
    const tempArray = [...todos];
    let updatedTodo = todos[index];
    updatedTodo.text = todoText;
    tempArray[index] = updatedTodo;
    setTodos(tempArray);
    setIsEditing(false)
    setTodoText("")
  };

  const removeTodosHandler = (id) => {
    setTodos(todos?.filter((todo) => todo.id !== id));
  };

  return (
    <div className="to-do-list-wrapper">
      <div className="to-do-list">
        <h1 className="heading">TO DO LIST</h1>
        <div className="to-do-list-input-wrapper">
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="add item..."
            className="to-do-list-input"
          />
        </div>
        {isEditing ? (
          <button
            disabled={!todoText}
            className="add-btn"
            onClick={() => updateTodoHandler(selectedTodoId)}
          >
            UPDATE
          </button>
        ) : (
          <button
            disabled={!todoText}
            className="add-btn"
            onClick={() => todosHandler()}
          >
            ADD
          </button>
        )}

        {todos?.map((todoObj) => {
          return (
            <div key={todoObj.id} id={todoObj.id} className="lists-wapper">
              <li className="list-item"> {todoObj.text} </li>
              <button
                className="delete-btn"
                onClick={(e) => removeTodosHandler(todoObj.id)}
              >
                Delete
              </button>
              <button
                className="edit-btn"
                onClick={() => {
                  setIsEditing(true);
                  setTodoText(todoObj.text);
                  setSelectedTodoId(todoObj.id);
                }}
                disabled={isEditing}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
