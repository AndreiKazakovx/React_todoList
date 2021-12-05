import React, { useState } from "react";
import "./TodoList.css";
import FormTodo from "./FormTodo";
import TodoListItem from "./TodoListItem";

function TodoList() {
  const [newTodoName, setNewTodoName] = useState("");
        // [getter, setter]

  const [list, setList] = useState([
    { title: "Learn React basics", isChecked: false },
    { title: "Create React apps", isChecked: true },
  ]);

  const onCheck = (event, title) => {
    const isChecked = event.target.checked;

    const listCopy = [...list];
    const titleIndex = listCopy.findIndex((element) => element.title === title);

    listCopy[titleIndex].isChecked = isChecked

    setList(listCopy)
  };

  const onChangeInput = (event) => {
    setNewTodoName(event.target.value); // Set input value
  };

  const onSubmit = (event) => {
    event.preventDefault(); // To not reload page
    if (!newTodoName) {
      return;
    }
    const newTodoItem = {
      title: newTodoName,
      isChecked: false,
    };

    setList([...list, newTodoItem]);
    setNewTodoName("");
  };

  const onDelete = (title) => {
    const listCopy = [...list];
    const titleIndex = listCopy.findIndex((element) => element.title === title);
    listCopy.splice(titleIndex, 1);
    setList(listCopy);
  };

  return (
    <div className="TodoList">
      <h2>TodoInput</h2>

      <FormTodo
        onSubmit={onSubmit}
        onChangeInput={onChangeInput}
        newTodoName={newTodoName}
      />
      <h2>TodoList</h2>
      <ul className="Todo_ul">
        {list.map((item) => (
          <TodoListItem item={item} onDelete={onDelete} onCheck={onCheck} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
