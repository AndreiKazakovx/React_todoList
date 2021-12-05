import React from "react";
import "./FormTodo.css";

function FormTodo({ onSubmit, newTodoName, onChangeInput }) {
  return (
    <form className="formForm" onSubmit={onSubmit}>
      {/*                       Controlled element bcs value monitoret local state       */}
      <input className="inputArea" type="text" placeholder={"Enter ur task"} value={newTodoName} onChange={onChangeInput} />
      <button className="btnForm" type="submit">Add new task</button>
    </form>
  );
}

export default FormTodo;
