import { useState } from "react";
import { Card, LN } from "./styles";

export default function MyToDoItems() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Money Cache 3mos Pay", done: false },
    { id: 2, title: "Invite 3 possible business partner", done: false },
    { id: 3, title: "Set a meeting this coming sunday", done: false },
  ]);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = { id: todos.length + 1, title: event.target.elements.todo.value, done: false };
    setTodos([...todos, newTodo]);
    event.target.reset();
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <Card>
        <label style={{ font: "15px" }}>My To Do Items</label>
        <form onSubmit={handleAddTodo}>
          <label style={{ float: "right", font: "15px" }}>
            <input type="text" placeholder="Type to add a new to do" name="todo" />
            <button type="submit">Add</button> | View All
          </label>
        </form>

        <br />
        <br />

        <LN />
        <br />

        <i className="fa-solid fa-triangle-exclamation" style={{ color: "orange" }}></i>
        <label style={{ color: "orange", marginLeft: "5px" }}>
          Latest to do's.
        </label>
        {todos.filter((todo) => !todo.done).length === 0 ? (
          <div style={{ color: "#646464" }}>No to dos found</div>
        ) : (
          todos
            .filter((todo) => !todo.done)
            .map((todo) => (
              <div key={todo.id}>
                <input style={{margin: "5px"}}
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                {todo.title}
              </div>
            ))
        )} 

        <br />
        <br />

        <i className="fa-solid fa-check" style={{ color: "green" }}></i>
        <label style={{ color: "green", marginLeft: "5px" }}>
          Latest finished to do's.
        </label>
        {todos.filter((todo) => todo.done).length === 0 ? (
          <div style={{ color: "#646464" }}>No finished todos found</div>
        ) : (
          todos
            .filter((todo) => todo.done)
            .map((todo) => (
              <div key={todo.id}>
                <input style={{margin: "5px"}}
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                {todo.title}
              </div>
            ))
        )}
      </Card>
    </>
  );
}