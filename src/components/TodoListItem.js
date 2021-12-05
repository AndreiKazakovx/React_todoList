import React from "react";
import classnames from "classnames";
import "./TodoListItem.css";

function TodoListItem({ item, onDelete, onCheck }) {
  return (
    <li className="TodoLi">
      <div className={classnames({ "todoCompleted": item.isChecked }, "regularClass")}>
        {item.title}
      </div>
      <div>
        <input
          type="checkbox"
          checked={item.isChecked}
          onChange={(event) => onCheck(event, item.title)}
        />
        <button
          type="button"
          className="BTN"
          onClick={() => onDelete(item.title)}
        >
          &#10060;
        </button>
      </div>
    </li>
  );
}
export default TodoListItem;
